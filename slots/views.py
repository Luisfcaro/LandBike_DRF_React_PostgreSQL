from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializer import SlotSerializer
from .models import Slot

from rest_framework.permissions import (AllowAny, IsAuthenticated)
from LandBike_DRF_Api.core.permissions import IsAdmin


# Create your views here.
class SlotViewSet(viewsets.ModelViewSet):
    queryset = Slot.objects.all()
    serializer_class = SlotSerializer
    lookup_field = 'slug'

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny]
        else:
            self.permission_classes = [IsAuthenticated, IsAdmin]
        return super(SlotViewSet, self).get_permissions()

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        filter_kwargs = {self.lookup_field: self.kwargs[self.lookup_field]}
        obj = get_object_or_404(queryset, **filter_kwargs)
        return obj
    
    def list(self, request, *args, **kwargs):
        station_id = request.query_params.get('station_id')

        if station_id:
            # Filtra por 'station_id', que es el ID de la instancia de 'Station' relacionada
            # Station__id es una forma que tiene Django de hacer referencia al campo 'id' de la instancia de 'Station' relacionada
            self.queryset = self.queryset.filter(station__id=station_id)
        
        response = super().list(request, *args, **kwargs)
        return response
    
    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        return response
    

    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True

        return self.update(request, *args, **kwargs)
    
    def destroy(self, request, *args, **kwargs):
        slot = self.get_object()
        slot.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
