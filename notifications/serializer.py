from rest_framework import serializers
from .models import Notification
from users.models import User


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

    def to_representation(self, instance):
        return {
            'id': instance.id,
            'user': instance.user.username,
            'message': instance.message,
            'read': instance.read,
            'created_at': instance.created_at
        }
    
    def create_notification(context):
        username = context['username']
        message = context['message']
        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        
        notification = Notification.objects.create(user=user, message=message)

        return {
            'notification' : {
                'id': notification.id,
                'user': notification.user.username,
                'message': notification.message,
                'read': notification.read,
                'created_at': notification.created_at
            }
        }
    
    def read_notification(context):
        notification_id = context['notification_id']
        notification = Notification.objects.get(id=notification_id)

        if notification is None:
            return {
                'error': 'Notification not found'
            }
        else:
            notification.read = True
            notification.save()
        

        return {
            'notification' : {
                'id': notification.id,
                'user': notification.user.username,
                'message': notification.message,
                'read': notification.read,
                'created_at': notification.created_at
            }
        }
    

    def delete_all_notifications(context):
        username = context['username']
        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        else:
            notifications = Notification.objects.filter(user=user)
            notifications.delete()
        

        return {
            'notifications' : 'All notifications deleted'
        }
    
    def get_notifications(context):
        username = context['username']
        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        else:
            notifications = Notification.objects.filter(user=user, read=False)
            return notifications
        