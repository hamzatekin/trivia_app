import requests
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from answer.models import Answer
from category.models import Category
from question.models import Question
from question.serializers import QuestionSerializer, QuestionListSerializer





@api_view(['GET'])
def insert_list(request):
    if request.method == 'GET':
        response = requests.get('https://opentdb.com/api.php?amount=50&category=12')
        response.raise_for_status()
        inc_data = response.json()
        serializer = QuestionListSerializer(data=inc_data['results'], many=True)
        if serializer.is_valid():
            data = serializer.data
            for obj in data:
                question = Question.objects.filter(name__iexact=obj['question'])
                if not question:
                    category = Category.objects.get(name__iexact=obj['category'])
                    if category is not None:
                        question = Question.objects.create(name=obj['question'], category=category)
                        Answer.objects.create(question=question, name=obj['correct_answer'], is_true=True)
                        for answer in obj['incorrect_answers']:
                            Answer.objects.create(question=question, name=answer, is_true=False)
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
