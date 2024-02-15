from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializer import StationSerializer
from .models import Station

from rest_framework.permissions import (AllowAny, IsAuthenticated)
from LandBike_DRF_Api.core.permissions import IsAdmin

# Create your views here

class StationViewSet(viewsets.ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny]
        else:
            self.permission_classes = [IsAuthenticated, IsAdmin]
        return super(StationViewSet, self).get_permissions()
    
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        # return Response(request.headers.get("Hola"))
        return self.update(request, *args, **kwargs)
    

    def create(self, request, *args, **kwargs):
        num_slots = request.data.pop('num_slots', 0)  # Extrae y elimina 'num_slots' del request data

        # Llamada a la implementación original de 'create'
        response = super().create(request, *args, **kwargs)

        # if response.status_code == 201:
        #     station_id = response.data['id']
        #     # Crear los slots especificados
        #     for _ in range(int(num_slots)):
        #         Slot.objects.create(station_id=station_id)
            
        #     # Puedes optar por actualizar la respuesta con información adicional si es necesario
        #     response.data['num_slots_created'] = num_slots

        return response


    def destroy(self, request, *args, **kwargs):
        station = self.get_object()
        
        # station_id = station.data.get('id')
    
        # Eliminar todos los Slots asociados con la Station.
        # Esto es necesario solo si no estás utilizando on_delete=models.CASCADE
        # Slot.objects.filter(id_station=station_id).delete()
        
        # Slot.objects.filter(station=station).delete()
        

        # Eliminar la Station
        station.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)

    
    # @action(detail=True, methods=['post'])
    # def add_slot(self, request):
    #     station = self.get_object()  # Obtener la Station basada en el 'pk' proporcionado
        
    #     station_id = station.data.get('id')

    #     new_slot = Slot.objects.create(id_station=station_id)  # Crear un nuevo Slot
        
    #     estado_slot = request.data.get('field1', 'valor_por_defecto1')
        
    #     new_slot = Slot.objects.create(station=station, slot_state=estado_slot)  # Crear un nuevo Slot

    #     return Response({"mensaje": "Slot añadido con éxito", "slot_id": new_slot.id}, status=status.HTTP_201_CREATED)