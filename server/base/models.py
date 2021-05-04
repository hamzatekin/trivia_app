from django.db import models


# Base Model that other models inherit from
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updadeted_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
