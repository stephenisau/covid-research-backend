from django.shortcuts import render, redirect
from .models import Category, Project, LandingPage
from .forms import landingpageForm
from django.contrib import messages
import requests_cache

# Create your views here.

s = requests_cache.CachedSession(backend='memory', expire_after=600)

def index(request):
    AllCategories = Category.objects.all()
    AllProjects = Project.objects.all()
    landingForm = landingpageForm(request.POST or None)
    try:
        stats = s.get('https://bing.com/covid/data').json()
        stats['totalConfirmedWithCommas'] = f"{stats['totalConfirmed']:,}"
    except:
        stats = {'totalConfirmedWithCommas':''}

    if request.method == 'POST':
        if landingForm.is_valid():
            landingForm.save()
            messages.success(request, "Project added successfully!")  # <-
        else:
            messages.warning(request, "Please fill form completely!")
    context = {
        "AllCategories": AllCategories,
        "AllProjects": AllProjects,
        "landingForm": landingForm,
        "stats": stats
    }
    return render(request, 'mainapp/index.html', context)

def thank_you(request):
    landingform = landingpageForm(request.POST or None)
    if request.method == "POST":
        if landingform.is_valid():
            landingform.save()
            messages.success(request, "Project added successfully!") 
        else:
            print('Landing form is not valid')
            return redirect(to="/")
    return render(request, 'mainapp/landing.html', status=200)
