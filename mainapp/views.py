from django.shortcuts import render
from .models import category, project
# Create your views here.


def index(request):
    AllCategories = category.objects.all()
    AllProjects = project.objects.all()
    context = {
        "AllCategories": AllCategories,
        "AllProjects": AllProjects
    }
    return render(request, 'mainapp/index.html', context)
