from django.urls import path

from . import views

urlpatterns = [
    path('start', views.quizgenerate),
    path('finish/', views.quizfinish),
    path('<magic_id>/', views.getscore),
]