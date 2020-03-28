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

class LandingPage(models.Model):
    project_name = models.CharField(max_length=30, name="Project Name")
    project_description = models.CharField(max_length=30, name="Project Description")
    contact_name = models.TextField(name="Contact Name")
    contact_email = models.EmailField(name="Contact Email")

    country = CountryField()
    city = models.CharField(max_length=30, name="City")

    funding = models.BooleanField(name="Need Funding", default=False)
    funding_type = models.CharField(max_length=30, name="Enter a funding type (ex: Patreon) ")
    funding_amount = models.IntegerField(name="How much funding do you need?")

    def __str__(self):
        return self.name
