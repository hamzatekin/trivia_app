import random
import shortuuid
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from answer.models import Answer
from question.models import Question
from quiz.models import Quiz
from quiz.serializers import QuizResponseSerializer, QuizFinishRequestSerializer, QuizModelSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def quizgenerate(request):
    if request.method == 'GET':
        magic_id = shortuuid.uuid()
        category_id = request.query_params.get('categoryId')
        if category_id is not None:
            questions = Question.objects.filter(category_id=category_id).prefetch_related('answer_set')
        else:
            questions = Question.objects.all().prefetch_related('answer_set')
        mapped = list(map(lambda x: {'question_id': x.id, 'name': x.name,
                                     'answers': list(
                                         map(lambda y: {'answer_id': y.id, 'name': y.name, 'is_true': y.is_true},
                                             x.answer_set.all()))}, questions))
        # mapped = list(map(lambda x: QuizResponseSerializer(x.id, x.name, x.answer_set.all()), questions))

        random_questions = []
        for i in range(10):
            choice = random.choice(mapped)
            random_questions.append(choice)

        serializer = QuizResponseSerializer(data=random_questions, many=True)
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.data, headers={'Access-Control-Allow-Origin': '*'})
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([AllowAny])
def quizfinish(request):
    serializer = QuizFinishRequestSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        magic_id = shortuuid.uuid()
        given_answers = serializer.data
        sum = 0
        for ans in given_answers['answers']:
            answer = Answer.objects.get(pk=ans)
            if answer.is_true is True:
                sum += 10
        quiz = Quiz.objects.create(score=sum, guid=magic_id, is_completed=True)
        serializer = QuizModelSerializer(quiz)
        return Response(serializer.data)
    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([AllowAny])
def getscore(request, magic_id):
    quiz = Quiz.objects.get(guid__exact=magic_id)
    if quiz is None:
        Response(status=status.HTTP_404_NOT_FOUND)
    serializer = QuizModelSerializer(quiz)
    return Response(serializer.data)
