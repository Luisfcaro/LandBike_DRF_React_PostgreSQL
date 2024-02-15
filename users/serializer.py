from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model: User
        fields = '__all__'

    def register(context):
        username = context['username']
        email = context['email']
        password = context['password']

        username_exist = len(User.objects.filter(username=username))
        email_exists = len(User.objects.filter(email=email))

        if (email_exists > 0 or username_exist > 0):
            return {
                'error': 'User already exists'
            }
        
        user = User.objects.create_user(username=username, email=email, password=password , type='user')

        return {
            'user' : {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type
            },
            'token': user.token,
            'ref_token': user.ref_token,
        }
    
    def login(context):
        username = context['username']
        password = context['password']

        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        
        if not user.check_password(password):
            return {
                'error': 'Invalid password'
            }
        
        return {
            'user' : {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type
            },
            'token': user.token,
            'ref_token': user.ref_token,
        }
    
    def get_user(context):
        username = context['username']
        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        
        return {
            'user' : {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type
            },
            'token': user.token,
            'ref_token': user.ref_token,
        }
    
    def refresh_token(context):
        username = context['username']
        user = User.objects.get(username=username)

        if user is None:
            return {
                'error': 'User not found'
            }
        
        return {
            'token': user.token
        }
            