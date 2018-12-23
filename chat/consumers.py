from channels.consumer import AsyncConsumer
import json

class EchoConsumer(AsyncConsumer):
    async def websocket_connect(self,event):
        await self.send({
            "type":"websocket.accept"
            })

        await self.channel_layer.group_add("group",self.channel_name)

    async def websocket_receive(self,event):

        newevent ={
                "type":"chat_message",
                "text":event['text']
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


