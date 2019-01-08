from django.shortcuts import render
import requests
from django.http import HttpResponse
from django.http import JsonResponse
from chat.models import User
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
# Create your views here.
import json


from channels.layers import get_channel_layer

from asgiref.sync import async_to_sync


def m(requests):
    print("hello")
    return HttpResponse("hello")

def getUserList(requests):
    userList=list(User.objects.all().values())
    return JsonResponse({'isValid':'test','userList':userList})

def logOut(requests):
    userList=list(User.objects.all().values())
    return JsonResponse({'code':'logged_out','message':'Successfully Logged Out user'})

@csrf_exempt
def login(requests):
    try:
        body_unicode = requests.body.decode('utf-8')
        body = json.loads(body_unicode)

        response=dict()
        user = User.objects.get_or_create(username=body['username'])
        response['code']="logged_in"
        response['message']='Successfully logged in user'
        layer = get_channel_layer()

    except:
        response['code']="logged_in_failed"
        response['message']='Login failed, Internal server Error'


    return JsonResponse(response)



@csrf_exempt
def joinRoom(requests):
    try:
        body_unicode = requests.body.decode('utf-8')
        body = json.loads(body_unicode)

        response=dict()
        user = User.objects.get_or_create(username=body['username'],chatRoom=body['chatRoom'])
        response['code']="joined_chatroom"
        response['message']='Successfully joined Chatroom'

    except:
        response['code']="chatroom_joining_failed"
        response['message']='Login failed, Internal server Error'


    return JsonResponse(response)

@csrf_exempt
def leaveRoom(requests):
    try:
        body_unicode = requests.body.decode('utf-8')
        body = json.loads(body_unicode)

        response=dict()
        User.objects.filter(username=body['username'],chatRoom=body['chatRoom']).delete()
        response['code']="left_chatroom"
        response['message']='Successfully left the Chatroom'

    except:
        response['code']="chatroom_leaving_failed"
        response['message']='Login failed, Internal server Error'


    return JsonResponse(response)

@csrf_exempt
def getChatRoomUserList(requests):

    body_unicode = requests.body.decode('utf-8')
    body = json.loads(body_unicode)
    userList=list(User.objects.filter(chatRoom=body['chatRoom']).values())

    return JsonResponse({'isValid':'test','userList':userList})

