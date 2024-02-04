from rest_framework import serializers
from .models import Station
from slots.models import Slot

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = '__all__'
        
    def to_representation(self, instance):
        qty_slots = len(Slot.objects.filter(station=instance.id))
        bikes_aviable = len(Slot.objects.filter(station=instance.id, bike__isnull=False))
        return {
            'id': instance.id,
            'station_name': instance.station_name,
            'station_status': instance.station_status,
            'image': instance.image,
            'location': instance.location,
            'qty_slots': qty_slots,
            'bikes_aviable': bikes_aviable
        }