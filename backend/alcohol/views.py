import http
import json
from http.client import HTTPResponse
from django.db import connection
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .models import Alcohol, Alcohol_recommend, Alcohol_code
from django.http.response import JsonResponse
from rest_framework.response import Response
from django.core import serializers

# Create your views here.


# 술 상세정보 불러오기 
@api_view(['GET'])
@permission_classes([AllowAny])
def alcoDetails(request, alco_no):
    cursor= connection.cursor()
    # result = Alcohol_recommend.objects.prefetch_related('alcohol_no').all().filter(alcohol_no = alco_no)
    result = cursor.execute('''SELECT a.*, ar.sweet, ar.sour, ar.scent, ar.body, ar.score, ac.alcohol_type
                                         FROM alcohol AS a inner join alcohol_recommend AS ar
                                         ON a.alcohol_no = ar.alcohol_no
                                         LEFT JOIN alcohol_code AS ac
                                         ON a.alcohol_code = ac.alcohol_code
                                         WHERE a.alcohol_no=%s''',[alco_no])

    datas = cursor.fetchone()

 
    alco_no = datas[0]
    ## 여기 고치기 !!!!!!!!!!!!!!!!11
    details ={
        'alco_no' :  alco_no,
        'alco_name' : datas[1].replace("|", ","),
        'abv' : datas[2],
        'material' : datas[3].replace("|", ","),
        'detail' : datas[4],
        'brewery' : datas[5],
        'award' : datas[6].replace("|", ","),
        'like_count' : datas[7],
        'food' : datas[8].replace("|", ","),
        'tag' : datas[9].replace("|", ","),
        'size' : datas[11].replace("|", ","),
        'sweet' : datas[13],
        'sour' : datas[14],
        'scent' : datas[15],
        'body' : datas[16],
        'score' : datas[17],
        'alco_type' : datas[18],
        'alco_img' : 'https://a402o1a4.s3.ap-northeast-2.amazonaws.com/'+str(alco_no)+'.png'
    }
   

    return JsonResponse(details)


