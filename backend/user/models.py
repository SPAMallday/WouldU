from datetime import datetime
from django.db import models

# Create your models here.


# 사용자 유형 테이블 ( A,B,C,D )
class USER_KIND_CODE(models.Model):
    kind_code = models.CharField(max_length=2, primary_key=True)
    kind_name = models.CharField(max_length=20)

# 사용자 테이블
class USER(models.Model):
    user_no = models.AutoField(primary_key=True)
    user_id = models.CharField(max_length=13, null=False)
    password = models.CharField(max_length=255, null=False)
    nickname = models.CharField(max_length=20)
    gender = models.IntegerField(default=0)
    birth = models.DateTimeField(default = datetime.now())
    user_kind = models.ForeignKey(USER_KIND_CODE, on_delete=models.CASCADE)

