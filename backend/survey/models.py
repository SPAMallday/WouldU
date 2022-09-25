from django.db import models
from user.models import User

class Survey(models.Model):
     user_no = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, db_column='user_no')
     reply_list = models.CharField(null=False, max_length=8) #몇문제인지 정해지면 max_length 해서 문자열로 저장 
     class Meta:
        db_table = 'survey'


