from django.db import models

# Create your models here.
class Station(models.Model):
    station_name = models.CharField(max_length=100)
    station_desc = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100)
    id_zone = models.IntegerField()

    def __str__(self):
        return self.station_name
