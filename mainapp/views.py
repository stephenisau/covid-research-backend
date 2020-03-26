from django.shortcuts import render
from .models import Category, Project, LandingPage
from .forms import landingpageForm
from django.contrib import messages

# Create your views here.


def index(request):
    AllCategories = Category.objects.all()
    AllProjects = Project.objects.all()
    landingForm = landingpageForm(request.POST or None)
    if request.method == 'POST':
        if landingForm.is_valid():
            landingForm.save()
            messages.success(request, "Project added successfully!")  # <-
        else:
            messages.warning(request, "Please fill form completely!")
    context = {
        "AllCategories": AllCategories,
        "AllProjects": AllProjects,
        "landingForm": landingForm
    }
    return render(request, 'mainapp/index.html', context)
