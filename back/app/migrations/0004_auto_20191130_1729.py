# Generated by Django 2.2.7 on 2019-11-30 20:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20191130_1724'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='createdAt',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 30, 17, 29, 6)),
        ),
    ]
