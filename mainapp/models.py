from django.db import models
from django.utils import timezone
from datetime import datetime
from django_countries.fields import CountryField
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

    def __str__(self):
        return self.name

    @classmethod
    def create(cls, name, description, need, received):
        project = cls(name=name, description=description, need=need, received=received)
        return project


class LandingPage(models.Model):
    project_name = models.CharField(max_length=30, name="project_name")
    project_description = models.CharField(max_length=140, name="project_description")
    contact_name = models.CharField(max_length=30, name="contact_name")
    contact_email = models.EmailField(name="contact_email", unique=True)

    country = CountryField()

    city = models.CharField(max_length=30, name="project_city")
    funding = models.BooleanField(name="need_funding", default=False)
    funding_type = models.CharField(max_length=30, name="funding_type")
    funding_amount = models.IntegerField(name="funding_amount")

    def __str__(self):
        return self.project_name

