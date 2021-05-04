from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from question.models import Question
from question.serializers import QuestionSerializer


class QuestionAPI(APIView):

    def get(self, request, format=None):
        category = Question.objects.all()
        serializer = QuestionSerializer(category, many=True)
        return Response(serializer.data, headers={'Access-Control-Allow-Origin': '*'})

    def post(self, request, format=None):
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
