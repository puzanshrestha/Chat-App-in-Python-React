from channels.consumer import AsyncConsumer
import json
from .models import User
from chat.models import User

class EchoConsumer(AsyncConsumer):
    async def websocket_connect(self,event):
        await self.send({
            "type":"websocket.accept"
            })

        await self.channel_layer.group_add("group",self.channel_name)
        newevent ={
            "type":"chat_message",
            "text":json.dumps({"actionType":'updateUserList'})
            }
        await self.channel_layer.group_send("group",newevent)

    async def websocket_receive(self,event):
        clientRequest = json.loads(event["text"])

        clientResponse=dict()


        if(clientRequest['actionType']=='message'):
            clientResponse['message']=clientRequest['message']
            clientResponse['actionType']='message'
            clientResponse['sender']=clientRequest['sender']
            clientResponseJson=json.dumps(clientResponse)

        elif(clientRequest['actionType']=='logout'):
            #Delete User from Associated Chatroom
            clientResponse['username']=clientRequest['username']
            User.objects.filter(username=clientResponse['username']).delete()
            clientResponseJson=json.dumps({"actionType":'updateUserList'})

        else :
            pass




        newevent ={
                    "type":"chat_message",
                    "text":clientResponseJson
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


