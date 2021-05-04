from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from category.models import Category
from category.serializers import CategorySerializer


class CategoryApi(APIView):

    def get(self, request, format=None):
        category = Category.objects.all()
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data, headers={'Access-Control-Allow-Origin': '*'})

    def post(self, request, format=None):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
