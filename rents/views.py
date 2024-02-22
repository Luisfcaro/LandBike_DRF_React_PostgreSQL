from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializer import RentSerializer
from .models import Rent
from rest_framework.decorators import action

from rest_framework.permissions import (AllowAny, IsAuthenticated)
from LandBike_DRF_Api.core.permissions import IsAdmin

# Create your views here.

class RentViewSet(viewsets.ModelViewSet):
    queryset = Rent.objects.all()
    serializer_class = RentSerializer
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
    
    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        return response
    
    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        return response
    
    def destroy(self, request, *args, **kwargs):
        rent = self.get_object()
        rent.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def return_bike(self, request, *args, **kwargs):
        data = request.user
        context = {
            'username': data.username,
            'final_slot_slug': request.data['final_slot_slug'],
        }
        response = RentSerializer.return_bike(context)
        return Response(response)
    
    def rent_bike(self, request, *args, **kwargs):
        data = request.user
        context = {
            'username': data.username,
            'initial_slot_slug': request.data['initial_slot_slug']
        }
        response = RentSerializer.rent(context)
        return Response(response)