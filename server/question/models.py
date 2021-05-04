from django.db import models
from base.models import BaseModel
from category.models import Category


class Question(BaseModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.TextField(max_length=750, blank=False, null=False)

    def __str__(self):
        return self.name
