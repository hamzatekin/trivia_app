from django.db import models

from base.models import BaseModel


class Category(BaseModel):
    name = models.TextField(max_length=75, blank=False, null=False)

    def __str__(self):
        return self.name
