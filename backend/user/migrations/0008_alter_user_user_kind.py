# Generated by Django 4.1.1 on 2022-09-26 14:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_survey'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_kind',
            field=models.ForeignKey(db_column='user_kind', null=True, on_delete=django.db.models.deletion.CASCADE, to='user.user_kind_code'),
        ),
    ]
