from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from pytz import timezone

class User_kind_code(models.Model):
    kind_code = models.CharField(max_length=2, primary_key=True)
    kind_name = models.CharField(max_length=20)
    class Meta:
        db_table = 'user_kind_code'


class User(models.Model):
    user_no = models.AutoField(primary_key=True)
    user_id = models.CharField(max_length=13, null=False, unique=True)
    password = models.CharField(max_length=255, null=False)
    nickname = models.CharField(max_length=20)
    gender = models.IntegerField(default=0)
    birth = models.DateField(null=True, blank=True)
    user_kind = models.ForeignKey(User_kind_code, on_delete=models.CASCADE)
    class Meta:
        db_table = 'user'
   
