from django.db import models

# Create your models here.
class Bike(models.Model):
    slug = models.SlugField(max_length=100, unique=True, editable=False)
    bike_status = models.CharField(max_length=100)
    bike_name = models.CharField(max_length=100)

    def __str__(self):
        return self.slug
