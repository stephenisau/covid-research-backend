from rest_framework import routers
from .api import ProjectViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register('api/projects', ProjectViewSet, 'projects')
router.register('api/categories', CategoryViewSet, 'categories')

urlpatterns = router.urls