from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class User(models.Model):
    """
    :type username: str
    :type email: str
    :type name: str
    :type is_investor: boolean
    """
    username = models.CharField(max_length=200)
    email = models.EmailField()
    name = models.CharField(max_length=30)
    is_investor = models.BooleanField(
                        verbose_name="Investor", 
                        name="is_investor",
                        default=True)
    def __str__(self):
        return f"{self.username} {self.name}"

"""
Project Owner Registration

"""

"""
Investor Registration

"""

"""
Login
- username
- password
"""

# Project Registration forms
"""
name
description
project status
target country
image
pitch deck?
pitch video (youtube link)
???
"""
