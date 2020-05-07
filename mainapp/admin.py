from django.contrib import admin
from .models import Category, Project, LandingPage
# Register your models here.

# admin.site.register(Category)
# admin.site.register(Project)
# admin.site.register(LandingPage)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    model = Category


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = ('name', 'category', 'description')


@admin.register(LandingPage)
class LandingAdmin(admin.ModelAdmin):
    fields = ('project_name', 'project_description', 'contact_name', 'contact_email', ('funding', 'funding_amount'))

