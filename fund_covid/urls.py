from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="homepage"),
    path("/users", views.all, name="users"),
    path("/users/register", views.register, name="register"),
    path("/users/login", views.login, name="login")
]
