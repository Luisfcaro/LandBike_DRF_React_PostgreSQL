from django.db import models

# Create your models here.

class Rent(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='rents')
    bike = models.ForeignKey('bikes.Bike', on_delete=models.CASCADE, related_name='bikes')
    initial_slot = models.ForeignKey('slots.Slot', on_delete=models.CASCADE, related_name='initial_slot')
    final_slot = models.ForeignKey('slots.Slot', on_delete=models.CASCADE, null=True, related_name='final_slot')
    rent_date = models.DateTimeField(auto_now_add=True)
    return_date = models.DateTimeField(null=True)

    def __str__(self):
        return str(self.id)
    
