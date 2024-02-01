from django.db import models

# Create your models here.
class Slot(models.Model):
    slug = models.SlugField(max_length=100, unique=True, editable=False)
    slot_name = models.CharField(max_length=100)
    slot_status = models.CharField(max_length=100)
    image = models.CharField(max_length=100, null=True, default='https://picsum.photos/id/49')
    station = models.ForeignKey('stations.Station', on_delete=models.CASCADE, null=False, related_name='slots')
    bike = models.OneToOneField('bikes.Bike', on_delete=models.CASCADE, null=True, related_name='slots')

    def __str__(self):
        return self.slug
