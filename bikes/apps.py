from django.apps import AppConfig
from django.db.models.signals import pre_save

class BikesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'bikes'

    def ready(self):
        from .signals import set_slug
        pre_save.connect(set_slug, sender='bikes.Bike')
