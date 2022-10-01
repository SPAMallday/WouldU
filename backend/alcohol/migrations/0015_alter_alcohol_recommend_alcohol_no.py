# Generated by Django 4.1.1 on 2022-09-30 03:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("alcohol", "0014_alter_alcohol_like_count"),
    ]

    operations = [
        migrations.AlterField(
            model_name="alcohol_recommend",
            name="alcohol_no",
            field=models.OneToOneField(
                db_column="alcohol_no",
                on_delete=django.db.models.deletion.CASCADE,
                primary_key=True,
                serialize=False,
                to="alcohol.alcohol",
            ),
        ),
    ]