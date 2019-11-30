from django.db import models
from datetime import date

# Create your models here.
class Note(models.Model):
    class Meta:
        db_table = 'note'

    title = models.CharField(max_length=200)
    content = models.TextField()
    createdAt = models.DateField(default=date.today)

    def __str__(self):
        return self.title