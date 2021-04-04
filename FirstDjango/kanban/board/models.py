from django.db import models
 
# Create your models here.

class kanbanItem(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    todo = models.TextField()
    labels = models.TextField()