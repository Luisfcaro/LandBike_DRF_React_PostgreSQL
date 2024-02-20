from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializer import NotificationSerializer
from .models import Notification

from rest_framework.permissions import (AllowAny, IsAuthenticated)
from LandBike_DRF_Api.core.permissions import IsAdmin


# Create your views here.

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    lookup_field = 'id'

    def get_permissions(self):
        """
        Define permisos para diferentes acciones
        """
        if self.action in ['retrieve', 'destroy']:
            permission_classes = [IsAdmin]  # Solo los admins para list, retrieve, destroy
        else:
            permission_classes = [IsAuthenticated]  # Todos los autenticados para el resto
        return [permission() for permission in permission_classes]

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        filter_kwargs = {self.lookup_field: self.kwargs[self.lookup_field]}
        obj = get_object_or_404(queryset, **filter_kwargs)
        return obj

    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        return response

    def destroy(self, request, *args, **kwargs):
        notification = self.get_object()
        notification.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def read_notification(self, request, *args, **kwargs):
        data = request.user
        context = {
            'username': data.username,
            'notification_id': kwargs['notification_id'],
        }
        response = NotificationSerializer.read_notification(context)
        return Response(response)
    
    def create_notification(self, request, *args, **kwargs):
        data = request.user
        context = {
            'username': data.username,
            'message': request.data['message'],
        }
        response = NotificationSerializer.create_notification(context)
        return Response(response)
    
    def delete_all_notifications(self, request, *args, **kwargs):
        data = request.user
        context = {
            'username': data.username,
        }
        response = NotificationSerializer.delete_all_notifications(context)
        return Response(response)
    
    def all_user_notifications(self, request, *args, **kwargs):
        data = request.user
        context = {
            'username': data.username,
        }
        response = NotificationSerializer.get_notifications(context)

        if response is not None:
            serializer = NotificationSerializer(response, many=True)
        return Response(serializer.data)