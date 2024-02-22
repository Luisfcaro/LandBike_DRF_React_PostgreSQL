from django.utils.timezone import now
from rest_framework import serializers
from .models import Incident
from users.models import User
from slots.models import Slot
from notifications.models import Notification

class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = '__all__'

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'user': instance.user.username,
            'slot': instance.slot.slug,
            'state': instance.state,
            'incident_date': instance.incident_date,
            'resolved_date': instance.resolved_date,
            'description': instance.description
        }

    def create_incident(context):
        username = context['username']
        slot_slug = context['slot_slug']
        description = context['description']

        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        
        slot = Slot.objects.get(slug=slot_slug)

        if slot is None:
            return {
                'error': 'Slot not found'
            }
        
        incident = Incident.objects.create(user=user, slot=slot, description=description)

        notification = Notification.objects.create(
            user=user,
            message='Se ha reportado un incidente en el slot ' + slot_slug + ' con la siguiente descripción: ' + description
        )

        slot.slot_status = "En mantenimiento"
        slot.save()

        return {
            'incident' : {
                'id': incident.id,
                'user': incident.user.username,
                'slot': incident.slot.slug,
                'state': incident.state, # 'open' by default
                'incident_date': incident.incident_date,
                'description': incident.description
            }
        }
    
    def resolve_incident(context):
        username = context['username']
        incident_id = context['incident_id']
        state = context['state']


        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        
        incident = Incident.objects.get(id=incident_id)


        notification = Notification.objects.create(
            user=incident.user,
            message='Se ha resuelto el incidente ' + str(incident_id)
        )

        if incident is None:
            return {
                'error': 'Incident not found'
            }
        
        slot = Slot.objects.get(slug=incident.slot.slug)

        if slot is None:
            return {
                'error': 'Slot not found'
            }
        
        slot.slot_status = "No disponible"
        slot.bike = None
        slot.save()
        
        if incident.state == 'resolved':
            return {
                'error': 'Incident already resolved'
            }
        else:
            incident.state = state
            incident.resolved_date = now()
            incident.save()

        return {
            'incident' : {
                'id': incident.id,
                'user': incident.user.username,
                'slot': incident.slot.slug,
                'state': incident.state,
                'incident_date': incident.incident_date,
                'resolved_date': incident.resolved_date,
                'description': incident.description
            }
        }