# Generated by Django 4.1.1 on 2022-09-30 02:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("user", "0008_alter_user_user_kind"),
        ("mypage", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="User_alcohol",
            fields=[
                (
                    "user_kind",
                    models.OneToOneField(
                        db_column="user_kind_code",
                        on_delete=django.db.models.deletion.CASCADE,
                        primary_key=True,
                        serialize=False,
                        to="user.user_kind_code",
                    ),
                ),
                ("alcohol_type_figure", models.JSONField(default=dict)),
                ("alcohol_taste_figure", models.JSONField(default=dict)),
            ],
            options={
                "db_table": "user_alcohol",
            },
        ),
    ]