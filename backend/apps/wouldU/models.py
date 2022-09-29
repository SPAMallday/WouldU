from django.db import models

from user.models import User

#주류 종류 (과실주 :A1) (증류주 :A2) (약주, 청주 :A3) (리큐르/기타주류 :A4) (탁주 :A5)
# class Alcohol_code(models.Model):
#     alcohol_code = models.CharField(max_length=3, primary_key=True)
#     alcohol_type = models.CharField(max_length=30)

#     class Meta :
#         db_table = 'alcohol_code'


# class Region_code(models.Model):
#     region_code = models.CharField(max_length=5, primary_key=True)
#     region_name = models.CharField(max_length=10)

#     class Meta :
#         db_table = 'region_code'


# class Alcohol(models.Model):
#     alcohol_no = models.AutoField(primary_key=True)
#     alcohol_name=models.CharField(max_length=50)
#     alcohol_image= models.CharField(max_length=100, null=True)
#     alcohol_code=models.ForeignKey(Alcohol_code, on_delete=models.CASCADE, db_column='alcohol_code') #주종 (과실주, 증류주)
#     abv =models.FloatField() #도수
#     region_code=models.ForeignKey(Region_code, on_delete=models.CASCADE, db_column='region_code')
#     material= models.CharField(max_length=100)
#     detail = models.TextField()
#     brewery = models.CharField(max_length=100, null=True)
#     award= models.CharField(max_length=500, null=True)
#     like_count = models.IntegerField(null=False, default=0)
#     food = models.CharField(max_length=500, null= True)
#     tag = models.CharField(max_length=50, null=True)
#     size = models.CharField(max_length=20, null=True)

#     class Meta :
#         db_table = 'alcohol'


class Ranking(models.Model):
    alcohol_no = models.IntegerField(primary_key=True)
    # alcohol_no = models.OneToOneField(Alcohol, on_delete=models.CASCADE, primary_key=True) #, db_column='alcohol_no')
    ranking = models.IntegerField(null=False)

    class Meta:
        db_table = 'ranking'


class Review(models.Model):
    review_no = models.AutoField(primary_key=True)
    user_no = models.ForeignKey(User, on_delete=models.CASCADE)
    alcohol_no = models.IntegerField()
    # alcohol_no = models.ForeignKey(Alcohol, on_delete=models.CASCADE) #, db_column='alcohol_no')
    score = models.IntegerField(null=False)
    comment = models.CharField(max_length=150, null=False)
    sweet = models.IntegerField(null=False)
    sour = models.IntegerField(null=False)
    scent = models.IntegerField(null=False)
    body = models.IntegerField(null=False)
    reg_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'review'



