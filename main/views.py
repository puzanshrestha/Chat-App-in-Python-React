from django.shortcuts import render
import requests
from django.http import HttpResponse
# Create your views here.

def main(requests):
    print("hello")
    return HttpResponse("hello")
