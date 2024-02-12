from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify
from LandBike_DRF_Api.core.utils import generate_uuid
from .models import User

@receiver(pre_save, sender=User)

def add_uuid_if_not_set(sender, instance, *args, **kwargs):

    if instance and not instance.uuid:
        uuid = generate_uuid()
        instance.uuid = uuid
