from django.db import models

# Create your models here.
class Station(models.Model):
    station_name = models.CharField(max_length=100)
    station_desc = models.TextField(blank=True, null=True)
    station_status = models.CharField(max_length=100, null=False, default='Operativa')
    image = models.CharField(max_length=100, null=True, default='https://picsum.photos/id/69')
    location = models.CharField(max_length=100)


    def __str__(self):
        return self.station_name
