from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-category/', include('category.urls')),
    path('api-question/', include('question.urls')),
    path('api-quiz/', include('quiz.urls')),
    path('api-score/', include('quiz.urls')),

]
