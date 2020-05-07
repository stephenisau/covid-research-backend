from django.http import HttpResponse
from django.shortcuts import render


import requests_cache
# Create your views here.


def index(request):
    return HttpResponse("Hi")


def register(request):
    return HttpResponse("register")

def all(request):
    pass