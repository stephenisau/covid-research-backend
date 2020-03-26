# from rest_framework import routers
# from .api import ProjectViewSet, CategoryViewSet, LandingPageView

# router = routers.DefaultRouter()
# router.register('api/projects', ProjectViewSet, 'projects')
# router.register('api/categories', CategoryViewSet, 'categories')
# router.register('api/landing', LandingPageView, 'landingpage')

# urlpatterns = router.urls


from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="homepage"),
]
