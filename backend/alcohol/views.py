import http
import json
from user.models import User
from .models import Alcohol
from apps.wouldU.models import Review
from apps.wouldU.serializers import ReviewSerializer
from django.db import connection
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from apps.mypage.models import Alcohol_like
from django.http.response import JsonResponse
from rest_framework.response import Response
from django.core import serializers


# Create your views here.


# 술 상세정보 불러오기 
@api_view(['GET'])
@permission_classes([AllowAny])
def alcoDetails(request, alco_no, user_no):
    cursor= connection.cursor()
    # result = Alcohol_recommend.objects.prefetch_related('alcohol_no').all().filter(alcohol_no = alco_no)
    result = cursor.execute('''SELECT a.*, ar.sweet, ar.sour, ar.scent, ar.body, ar.score, ac.alcohol_type
                                         FROM alcohol AS a inner join alcohol_recommend AS ar
                                         ON a.alcohol_no = ar.alcohol_no
                                         LEFT JOIN alcohol_code AS ac
                                         ON a.alcohol_code = ac.alcohol_code
                                         WHERE a.alcohol_no=%s''',[alco_no])

    datas = cursor.fetchone()

    #로그인 안한 유저
    if(user_no == 0):
        like=0
    
    else : 
        #현재 로그인 유저가 좋아요 눌렀는지 
        isLike= Alcohol_like.objects.filter(alcohol_no = alco_no , user_no = user_no)
        is_row = isLike.exists()
        if(is_row == False): 
            like=0
        else :
            # 좋아요 취소한 사람이면 
            is_like = json.loads(serializers.serialize("json", isLike, fields = {"is_like"}))[0]['fields']['is_like']
            print(is_like)
            if(is_like==True):
                like=1
            else : 
                like=0
    

    alco_no = datas[0]
    details ={
        'user_like' : like,
        'alco_no' :  alco_no,
        'alco_name' : datas[1].replace("|", ","),
        'abv' : datas[2],
        'material' : datas[3].replace("|", ","),
        'detail' : datas[4].replace("\"", "'").replace("''", "'"),
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


# 좋아요 등록 / 취소 
@api_view(['POST'])
@permission_classes([AllowAny])
def alcoIsLike(request):
    data = json.loads(request.body)
    alco_no = Alcohol.objects.get(alcohol_no = data['alco_no'])
    user_no = User.objects.get(user_no = data['user_no'])
    
    alcohol = Alcohol.objects.filter(alcohol_no = alco_no.alcohol_no)
    # 해당 술의 좋아요 갯수 
    alco_like_count=json.loads(serializers.serialize("json", alcohol , fields={'like_count'}))[0]['fields']['like_count']
    # alco_like = Alcohol.objects.get(alcohol_no = data['alco_no'])
    # user_no = User.objects.get(user_no = data['user_no'])
    isLike= Alcohol_like.objects.filter(alcohol_no = alco_no , user_no = user_no)
    is_row = isLike.exists()
    # 아직 좋아요 한번도 안눌렀던 술 , 유저 ( 추가 )
    if(is_row == False): 
        Alcohol_like.objects.create(alcohol_no = alco_no , user_no = user_no, is_like=True)
        alco_like_cnt = alco_like_count+1
        alcohol.update(like_count = alco_like_cnt)

    else :
        is_like = json.loads(serializers.serialize("json", isLike, fields = {"is_like"}))[0]['fields']['is_like']
        if(is_like==True):
            alco_like_cnt = alco_like_count-1
            alcohol.update(like_count = alco_like_cnt)
            is_like = False
        else:
            alco_like_cnt = alco_like_count+1
            alcohol.update(like_count = alco_like_cnt)
            is_like= True

        isLike.update(is_like= is_like)
        
    return Response("success")


#상세페이지 리뷰 등록
@api_view(['POST'])
@permission_classes([AllowAny])
def alcoPostReview(request):
    review = ReviewSerializer(data= request.data)
    user_no = request.data['user_no']
    user_kind = json.loads(serializers.serialize("json", User.objects.filter(user_no = user_no), fields={'user_kind'}))[0]['fields']['user_kind']
    print(user_kind)

    if(review.is_valid()):
        review.save()

    return Response("success")      
