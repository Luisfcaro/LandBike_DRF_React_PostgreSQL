# Generated by Django 5.0.1 on 2024-02-07 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bike',
            name='bike_status',
            field=models.CharField(default='Disponible', max_length=100),
        ),
    ]
