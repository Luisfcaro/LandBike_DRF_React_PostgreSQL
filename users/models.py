from django.db import models
from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)
from django.conf import settings
from datetime import datetime, timedelta
import jwt


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if email is None:
            raise TypeError('Users must have an email address.')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        if password is None:
            raise TypeError('Superusers must have a password.')
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user
    
class User(AbstractBaseUser, PermissionsMixin):
    uuid = models.CharField('uuid', max_length=36, unique=True, blank=True, null=True)
    username = models.CharField('username', max_length=255, unique=True, blank=True, null=True)
    email = models.EmailField('email address', unique=True)
    type = models.CharField('type', max_length=255, blank=True, null=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    @property
    def token(self):
        return self._generate_jwt_token(3600)
    
    @property
    def ref_token(self):
        return self._generate_jwt_token(36000)
    
    def _generate_jwt_token(self, exp):
        dt = datetime.now() + timedelta(seconds=exp)
        token = jwt.encode({
            'username': self.username,
            'exp': dt.utcfromtimestamp(dt.timestamp())
        }, settings.SECRET_KEY, algorithm='HS256')

        return token.decode('utf-8')
    
    