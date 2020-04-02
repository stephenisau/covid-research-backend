from django import forms, template
from .models import LandingPage
import django_countries

class landingpageForm(forms.ModelForm):

    class Meta:
        model = LandingPage
        fields = "__all__"



    def __init__(self, *args, **kwargs):
        """
        This function adds placeholder text and inline styling to our form based on the input field type.
        """
        super(landingpageForm, self).__init__(*args, **kwargs)
        for key, field in self.fields.items():
            if isinstance(field.widget, forms.TextInput) or \
                    isinstance(field.widget, forms.Textarea) or \
                    isinstance(field.widget, forms.DateInput) or \
                    isinstance(field.widget, forms.NumberInput) or \
                    isinstance(field.widget, forms.EmailInput) or \
                    isinstance(field.widget, forms.IntegerField) or \
                    isinstance(field.widget, forms.DateTimeInput) or \
                    isinstance(field.widget, forms.TimeInput) or \
                    isinstance(field.widget, django_countries.widgets.LazySelect):
                field.widget.attrs.update(
                    {'placeholder': field.label, 'style': 'width: 100%;'})
