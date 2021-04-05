from django.db import models
 
# Create your models here.

class kanbanColumn(models.Model):
    title = models.CharField(max_length=120)
    deleted = models.BooleanField(default=False)

class kanbanItem(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    columnID = models.IntegerField()
    # todo = models.TextField()
    # labels = models.TextField()
    deleted = models.BooleanField(default=False)

class kanbanItemTask(models.Model):
    title = models.CharField(max_length=120)
    itemID = models.IntegerField()
    completed = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)

class kanbanItemLabel(models.Model):
    itemID = models.IntegerField()
    labelID = models.IntegerField()

class label(models.Model):
    title = models.CharField(max_length=20)
    color = models.TextField(max_length=8)
    deleted = models.BooleanField(default=False)