from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from category.models import Category
from category.serializers import CategoryListSerializer


# Inserts Categories in Bulk
@api_view(['POST'])
def insert_list(request):
    if request.method == 'POST':
        serializer = CategoryListSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.data['list']
            for obj in data:
                Category.objects.create(name=obj['name'])
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
