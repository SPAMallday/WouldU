# Generated by Django 4.1.1 on 2022-09-28 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alcohol', '0012_alcohol_recommend_rename_alcol_code_alcohol_code_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alcohol',
            name='like_count',
            field=models.IntegerField(),
        ),
    ]