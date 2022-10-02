# Generated by Django 4.1.1 on 2022-10-02 15:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('alcohol', '0017_alcohol_recommend_score'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='alcohol_recommend',
            name='score1',
        ),
        migrations.RemoveField(
            model_name='alcohol_recommend',
            name='score2',
        ),
        migrations.RemoveField(
            model_name='alcohol_recommend',
            name='score3',
        ),
        migrations.RemoveField(
            model_name='alcohol_recommend',
            name='score4',
        ),
        migrations.CreateModel(
            name='Alcohol_score1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_score', models.IntegerField(default=0)),
                ('count', models.IntegerField(default=0)),
                ('alcohol_no', models.OneToOneField(db_column='alcohol_no', on_delete=django.db.models.deletion.CASCADE, to='alcohol.alcohol')),
            ],
            options={
                'db_table': 'alcohol_score1',
            },
        ),
    ]
