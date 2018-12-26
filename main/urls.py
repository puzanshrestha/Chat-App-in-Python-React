from django.conf.urls import url

from django.urls import path,include
from main.views import main
urlpatterns=[
        url(r'^m/',main,name='main')
]
