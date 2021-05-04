from rest_framework import serializers

from answer.models import Answer


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'created_at', 'updated_at', 'name', 'is_true', 'question_id']
