from django.db import models

# Create your models here.


class category(models.Model):

    category = models.CharField(max_length=50)

    def __str__(self):
        return self.category


class project(models.Model):
    category = models.ForeignKey("category", on_delete=models.CASCADE)
    name = models.CharField(max_length=500)
    description = models.TextField()
    ytlink = models.URLField(max_length=200)
    need = models.IntegerField()
    recieved = models.IntegerField()

    def __str__(self):
        return self.name
