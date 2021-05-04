from django.contrib.auth.models import User, Group

from rest_framework import serializers

from category.models import Category


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class CategoryListSerializer(serializers.Serializer):
    list = CategorySerializer(many=True)
