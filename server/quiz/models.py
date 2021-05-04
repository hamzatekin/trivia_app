from django.db import models

from base.models import BaseModel


class Quiz(BaseModel):
    guid = models.CharField(max_length=22, null=False)
    is_completed = models.BooleanField(default=False)
    score = models.IntegerField(null=True)

    def __str__(self):
        return self.guid

    class Meta:
        verbose_name_plural = 'Quizzes'
