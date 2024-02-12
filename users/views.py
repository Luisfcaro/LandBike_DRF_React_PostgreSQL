from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import (AllowAny, IsAuthenticated)
from rest_framework import viewsets
from .models import User
from .serializer import UserSerializer
from LandBike_DRF_Api.core.permissions import IsAdmin


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    
    def get_serializer_class(self):
        return UserSerializer
    
    def register(self, request):
        data = request.data
        context = {
            'username': data['username'],
            'email': data['email'],
            'password': data['password']
        }
        response = UserSerializer.register(context=context)
        return Response(response)
    
    def login(self, request):
        data = request.data
        context = {
            'username': data['username'],
            'password': data['password']
        }
        response = UserSerializer.login(context=context)
        return Response(response)
    

class UserInfoViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()

    def get_serializer_class(self):
        return UserSerializer
    
    def GetActualUser(self, request):
        data = request.user
        context = {
            'username': data.username,
        }
        response = UserSerializer.get_user(context=context)
        return Response(response)
    
    def refresh_token(self, request):
        data = request.data
        context = {
            'ref_token': data['ref_token']
        }
        response = UserSerializer.refresh_token(context=context)
        return Response(response)
    



