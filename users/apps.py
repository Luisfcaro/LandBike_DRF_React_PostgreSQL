from django.apps import AppConfig
from django.db.models.signals import pre_save


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'

    def ready(self): 
        from .signals import add_uuid_if_not_set
        pre_save.connect(add_uuid_if_not_set, sender='users.User')