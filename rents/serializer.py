from django.utils.timezone import now
from rest_framework import serializers
from .models import Rent
from bikes.models import Bike
from slots.models import Slot
from users.models import User

class RentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fields = '__all__'

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'user': instance.user.username,
            'bike': instance.bike.id,
            'initial_slot': instance.initial_slot.slug,
            'final_slot': instance.final_slot.slug if instance.final_slot else None,
            'rent_date': instance.rent_date,
            'return_date': instance.return_date
        }

    def rent(context):
        username = context['username']
        initial_slot_slug = context['initial_slot_slug']

        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        
        initial_slot = Slot.objects.get(slug=initial_slot_slug)

        if initial_slot is None:
            return {
                'error': 'Initial slot not found'
            }
        
        bike = Bike.objects.get(id=initial_slot.bike.id)

        if bike is None:
            return {
                'error': 'Bike not found'
            }
        
        initial_slot.bike = None
        initial_slot.slot_status = 'No disponible'
        initial_slot.save()
        
        rent = Rent.objects.create(user=user, bike=bike, initial_slot=initial_slot)

        return {
            'rent' : {
                'id': rent.id,
                'user': rent.user.username,
                'bike': rent.bike.id,
                'initial_slot': rent.initial_slot.slug,
                'rent_date': rent.rent_date,
                'return_date': rent.return_date
            }
        }
    
    def return_bike(context):
        username = context['username']
        final_slot_slug = context['final_slot_slug']

        rent = Rent.objects.get(user__username=username, return_date=None)

        if rent is None:
            return {
                'error': 'Rent not found'
            }
        
        final_slot = Slot.objects.get(slug=final_slot_slug)

        if final_slot is None:
            return {
                'error': 'Final slot not found'
            }
        
        bike = Bike.objects.get(id=rent.bike.id)

        if bike is None:
            return {
                'error': 'Bike not found'
            }
        
        final_slot.bike = bike
        final_slot.slot_status = 'Disponible'
        final_slot.save()

        rent.final_slot = final_slot
        rent.return_date = now()
        rent.save()

        return {
            'rent' : {
                'id': rent.id,
                'user': rent.user.username,
                'bike': rent.bike.id,
                'initial_slot': rent.initial_slot.slug,
                'final_slot': rent.final_slot.slug,
                'rent_date': rent.rent_date,
                'return_date': rent.return_date
            }
        }
