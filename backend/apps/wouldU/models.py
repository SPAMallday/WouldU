from django.db import models

from user.models import User

# Create your models here.

class Alcohol(models.Model):
    alcohol_no = models.IntegerField(primary_key=True) #, db_column='alcohol_no')
    like_count = models.IntegerField(null=False, default=0)
    class Meta:
        db_table = 'alcohol'

class Rank(models.Model):
    alcohol_no = models.OneToOneField(Alcohol, on_delete=models.CASCADE, primary_key=True) #, db_column='alcohol_no')
    rank = models.IntegerField(null=False)
    class Meta:
        db_table = 'rank'
class Review(models.Model):
    review_no = models.AutoField(primary_key=True)
    user_no = models.ForeignKey(User, on_delete=models.CASCADE)
    alcohol_no = models.ForeignKey(Alcohol, on_delete=models.CASCADE) #, db_column='alcohol_no')
    score = models.IntegerField(null=False)
    comment = models.CharField(max_length=150, null=False)
    sweet = models.IntegerField(null=False)
    sour = models.IntegerField(null=False)
    scent = models.IntegerField(null=False)
    body = models.IntegerField(null=False)
    reg_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        db_table = 'review'


