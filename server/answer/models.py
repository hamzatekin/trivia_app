from django.db import models

from base.models import BaseModel
from question.models import Question


class Answer(BaseModel):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    name = models.CharField(max_length=750, blank=False, null=False)
    is_true = models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.name
