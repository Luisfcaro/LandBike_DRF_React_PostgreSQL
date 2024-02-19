from django.db import models
from users.models import User
from slots.models import Slot
# Create your models here.

class Incident(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='incidents')
    slot = models.ForeignKey(Slot, on_delete=models.CASCADE, related_name='slot')
    state = models.CharField(max_length=20, default='open')
    incident_date = models.DateTimeField(auto_now_add=True)
    resolved_date = models.DateTimeField(null=True)
    description = models.TextField()

    def __str__(self):
        return str(self.id)
