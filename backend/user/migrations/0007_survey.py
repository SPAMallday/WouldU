# Generated by Django 4.1.1 on 2022-09-26 13:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_alter_user_user_kind'),
    ]

    operations = [
        migrations.CreateModel(
            name='Survey',
            fields=[
                ('user_no', models.OneToOneField(db_column='user_no', on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='user.user')),
                ('reply_list', models.JSONField()),
            ],
            options={
                'db_table': 'survey',
            },
        ),
    ]