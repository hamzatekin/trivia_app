from rest_framework import serializers

from answer.serializers import AnswerSerializer
from quiz.models import Quiz


class QuizSerializer(serializers.Serializer):
    category_id = serializers.IntegerField(required=False)


class QuizModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['id', 'created_at', 'updadeted_at', 'guid', 'is_completed', 'score']


class AnswerResponseSerializer(serializers.Serializer):
    answer_id = serializers.IntegerField()
    name = serializers.CharField()
    is_true = serializers.BooleanField()


class QuizResponseSerializer(serializers.Serializer):
    question_id = serializers.IntegerField()
    name = serializers.CharField()
    answers = AnswerResponseSerializer(many=True)


class AnsewrRequestSerializer(serializers.Serializer):
    answer1 = serializers.IntegerField(required=False)
    answer2 = serializers.IntegerField(required=False)
    answer3 = serializers.IntegerField(required=False)
    answer4 = serializers.IntegerField(required=False)
    answer5 = serializers.IntegerField(required=False)
    answer6 = serializers.IntegerField(required=False)
    answer7 = serializers.IntegerField(required=False)
    answer8 = serializers.IntegerField(required=False)
    answer9 = serializers.IntegerField(required=False)
    answer10 = serializers.IntegerField(required=False)


class QuizFinishRequestSerializer(serializers.Serializer):
    answers = serializers.ListField(child=serializers.IntegerField())
