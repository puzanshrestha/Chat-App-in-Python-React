from django.conf.urls import url

from django.urls import path,include
from main.views import (
    m,
    getUserList,
    logOut,
    login,
    joinRoom,
    leaveRoom,
    getChatRoomUserList

)

urlpatterns=[
        url(r'^m',m,name='m'),
        url(r'^get_user_list',getUserList),
        url(r'^logout',logOut),
        url(r'^login',login),
        url(r'^join_room',joinRoom),
        url(r'^leave_room',leaveRoom),
        url(r'^get_chat_room_user_list',getChatRoomUserList),

]
