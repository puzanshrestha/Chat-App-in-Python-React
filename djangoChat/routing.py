from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from django.conf.urls import url
from chat.consumers import EchoConsumer

application = ProtocolTypeRouter({
    'websocket': URLRouter([
        path(r"^main/ws",EchoConsumer),
        url(r'^main/ws/chatroom/(?P<room_name>[^/]+)/$', EchoConsumer),
       ])


})
