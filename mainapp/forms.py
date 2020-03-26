from django import forms
from .models import LandingPage


class landingpageForm(forms.ModelForm):

    class Meta:
        model = LandingPage
        fields = "__all__"
