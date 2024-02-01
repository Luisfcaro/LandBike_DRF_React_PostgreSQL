from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify
from LandBike_DRF_Api.core.utils import generate_random_string



from .models import Bike

@receiver(pre_save, sender=Bike)

def set_slug(sender, instance, *args,**kwargs):
    MAXIMUN_SLUG_LENGTH = 50

    if instance and not instance.slug:
        slug = slugify(instance.bike_name)
        unique = generate_random_string()

        if len(slug) > MAXIMUN_SLUG_LENGTH:
            slug = slug[:MAXIMUN_SLUG_LENGTH]

        while len(slug + '-' + unique) > MAXIMUN_SLUG_LENGTH:
            parts = slug.split('-')

            if len(parts) is 1:
                slug = slug[:MAXIMUN_SLUG_LENGTH - len(unique) - 1]
            else:
                slug = '-'.join(parts[:-1])
        
        instance.slug = slug + '-' + unique
