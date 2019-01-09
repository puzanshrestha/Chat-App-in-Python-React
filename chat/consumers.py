from channels.consumer import AsyncConsumer
import json
from .models import User
from chat.models import User

class EchoConsumer(AsyncConsumer):
    async def websocket_connect(self,event):

        room_name=self.scope['url_route']['kwargs']['room_name']
        print(room_name)
        await self.send({
                "type":"websocket.accept"
                })

        await self.channel_layer.group_add(room_name,self.channel_name)
        newevent ={
            "type":"chat_message",
            "text":json.dumps({"actionType":'updateUserList',"chatRoom":room_name})
            }
        await self.channel_layer.group_send(room_name,newevent)

    async def websocket_receive(self,event):
        clientRequest = json.loads(event["text"])

        clientResponse=dict()

        if(clientRequest['actionType']=='message'):
            clientResponse['message']=clientRequest['message']
            clientResponse['actionType']='message'
            clientResponse['chatRoom']=clientRequest['chatRoom']
            clientResponse['sender']=clientRequest['sender']
            clientResponseJson=json.dumps(clientResponse)

        elif(clientRequest['actionType']=='logout'):
            #Delete User from Associated Chatroom
            clientResponse['username']=clientRequest['username']
            User.objects.filter(username=clientResponse['username']).delete()
            clientResponseJson=json.dumps({"actionType":'updateUserList',"chatRoom":clientResponse['chatRoom']})


        elif(clientRequest['actionType']=='leaveRoom'):
            #Update UserList
            User.objects.filter(username=clientRequest['username'],chatRoom=clientRequest['chatRoom']).delete()
            clientResponseJson=json.dumps({"actionType":'updateUserList',"chatRoom":clientRequest['chatRoom']})
            print(clientResponseJson)

        else :
            pass

        newevent ={
                    "type":"chat_message",
                    "text":clientResponseJson
                    }

            #await self.send(newevent)

        await self.channel_layer.group_send(clientRequest['chatRoom'],newevent)

    async def chat_message(self,event):
        await self.send({
            "type":"websocket.send",
            "text":event['text']
            })



    async def websocket_disconnect(self,event):
         newevent ={
                     "type":"chat_message",
                     "text":json.dumps({"actionType":'updateUserList',"chatRoom":room_name})
                     }
         await self.channel_layer.group_send(room_name,newevent)


