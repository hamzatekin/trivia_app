from django.urls import path

from . import views, api

urlpatterns = [
    path('', api.QuestionAPI.as_view()),
    path('bulk', views.insert_list),
]
