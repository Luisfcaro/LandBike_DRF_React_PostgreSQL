from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializer import IncidentSerializer
from .models import Incident

from rest_framework.permissions import (AllowAny, IsAuthenticated)
from LandBike_DRF_Api.core.permissions import IsAdmin

# Create your views here.

class IncidentViewSet(viewsets.ModelViewSet):
    queryset = Incident.objects.all()
    serializer_class = IncidentSerializer
    lookup_field = 'id'

    
    def get_permissions(self):
        """
        Define permisos para diferentes acciones
        """
        if self.action in ['retrieve', 'destroy', 'resolve_incident']:
            permission_classes = [IsAdmin]  # Solo los admins para list, retrieve, destroy
        else:
            permission_classes = [IsAuthenticated]  # Todos los autenticados para el resto
        return [permission() for permission in permission_classes]
    
    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        filter_kwargs = {self.lookup_field: self.kwargs[self.lookup_field]}
        obj = get_object_or_404(queryset, **filter_kwargs)
        return obj
    
    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        return response
    
    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        return response
    
    def destroy(self, request, *args, **kwargs):
        incident = self.get_object()
        incident.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def resolve_incident(self, request, *args, **kwargs):
        data = request.user
        context = {
            'username': data.username,
            'incident_id': request.data['incident_id'],
            'state': request.data['state'],
        }
        response = IncidentSerializer.resolve_incident(context)
        return Response(response)
    
    def create_incident(self, request, *args, **kwargs):
        data = request.user
        context = {
            'username': data.username,
            'slot_slug': request.data['slot_slug'],
            'description': request.data['description'],
        }
        response = IncidentSerializer.create_incident(context)
        return Response(response)
