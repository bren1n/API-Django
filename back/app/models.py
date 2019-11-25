from django.db import models
from django import utils

# Create your models here.
class Note(models.Model):
    class Meta:
        db_table = 'note'

    title = models.CharField(max_length=200)
    content = models.TextField()
    createdAt = models.DateTimeField(default=utils.timezone.now)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
