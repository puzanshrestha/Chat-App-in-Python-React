from django.conf.urls import url

from django.urls import path,include
from main.views import (
    m,
    getUserList,
    logOut,
    login

)

urlpatterns=[
        url(r'^m',m,name='m'),
        url(r'^get_user_list',getUserList),
        url(r'^logout',logOut),
        url(r'^login',login),
]
