from mainapp.models import Category, Project, LandingPage
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer, CategorySerializer, LandingPageSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProjectSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CategorySerializer
    
class LandingPageView(viewsets.ModelViewSet):
    queryset = LandingPage.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]