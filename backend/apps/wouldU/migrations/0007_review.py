# Generated by Django 4.1.1 on 2022-09-28 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wouldU', '0006_delete_review'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('review_no', models.AutoField(primary_key=True, serialize=False)),
                ('user_no', models.IntegerField(default=0)),
                ('alcohol_no', models.IntegerField(default=0)),
                ('score', models.IntegerField(default=0)),
                ('comment', models.CharField(default='', max_length=150)),
                ('sweet', models.IntegerField(default=0)),
                ('sour', models.IntegerField(default=0)),
                ('scent', models.IntegerField(default=0)),
                ('body', models.IntegerField(default=0)),
                ('reg_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'review',
            },
        ),
    ]