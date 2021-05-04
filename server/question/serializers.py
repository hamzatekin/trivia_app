from rest_framework import serializers

from question.models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'name')


class IncorrectAnswerSerializer(serializers.Serializer):
    incorrect_answer = serializers.CharField()


class QuestionListSerializer(serializers.Serializer):
    category = serializers.CharField()
    type = serializers.CharField()
    question = serializers.CharField()
    difficulty = serializers.CharField()
    correct_answer = serializers.CharField()
    incorrect_answers = serializers.ListField(child=serializers.CharField())


class QuestionReturnSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
