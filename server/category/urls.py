from django.urls import path

from . import views, api

urlpatterns = [
    path('', api.CategoryApi.as_view()),
    path('bulk', views.insert_list),
]
