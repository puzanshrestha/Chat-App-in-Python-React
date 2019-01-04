from channels.consumer import AsyncConsumer
import json

class EchoConsumer(AsyncConsumer):
    async def websocket_connect(self,event):
        await self.send({
            "type":"websocket.accept"
            })

        await self.channel_layer.group_add("group",self.channel_name)

    async def websocket_receive(self,event):
        clientRequest = json.loads(event["text"])

        clientResponse=dict()
#        clientResponse['message']=clientRequest['message']
#        clientResponse['actionType']='message'
#        clientResponse['sender']=clientRequest['sender']
#        clientResponse['messageType']=clientRequest['re']

        if(clientRequest['actionType']=='message'):
            newevent ={
                    "type":"chat_message",
                    "text":json.dumps(clientRequest)
                    }

            #await self.send(newevent)

            await self.channel_layer.group_send("group",newevent)

    async def chat_message(self,event):
        await self.send({
            "type":"websocket.send",
            "text":event['text']
            })



    async def websocket_disconnect(self,event):
         print("disconnected",event)


