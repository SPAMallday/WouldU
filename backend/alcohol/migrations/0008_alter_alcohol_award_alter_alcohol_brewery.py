# Generated by Django 4.1.1 on 2022-09-28 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alcohol', '0007_alter_alcohol_food'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alcohol',
            name='award',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='alcohol',
            name='brewery',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
