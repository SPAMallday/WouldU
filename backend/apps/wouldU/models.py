from django.db import models

# Create your models here.

class Alcohol(models.Model):
    alcohol_no = models.IntegerField(primary_key=True) #, db_column='alcohol_no')
    ran = models.IntegerField(null=False)
    class Meta:
        db_table = 'alcohol'

class Rank(models.Model):
    alcohol_no = models.OneToOneField(Alcohol, on_delete=models.CASCADE, primary_key=True) #, db_column='alcohol_no')
    rank = models.IntegerField(null=False)
    class Meta:
        db_table = 'rank'


