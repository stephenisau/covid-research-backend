from django.db import models
from django.utils import timezone
from datetime import datetime
# Create your models here.


class Category(models.Model):

    category = models.CharField(max_length=50)

    def __str__(self):
        return self.category


class Project(models.Model):
    category = models.ForeignKey("category", on_delete=models.CASCADE)
    name = models.CharField(max_length=500)
    description = models.TextField()
    ytlink = models.URLField(max_length=200)
    need = models.IntegerField()
    received = models.IntegerField()
    # created_at = models.DateTimeField(auto_now_add=True, default=timezone.now)
    def __str__(self):
        return self.name
