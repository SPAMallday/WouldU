from dataclasses import field
import json
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import User, Survey

from django.db import connection

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse
from django.core import serializers


from user.serializer import UserSerializer

# Create your views here.
# 회원가입 
@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    user = UserSerializer(data=request.data)
    print(user)
    reply_list= request.data['reply_list']
    # reply_list=''.join(str(x) for x in request.data['reply_list']) #json 리스트를 문자열로 
    print(reply_list)
    if user.is_valid():
        # Survey.objects.create(user_no = 16, reply_list= reply_list)
        user.save()
        user_id = user['user_id'].value
        id = User.objects.get(user_id = user_id) # user_no
        Survey.objects.create(user_no = id, reply_list = reply_list)
        # # return Response(status=status.HTTP_200_OK)
        # nuser= user.save(commit=False)
        # user_id = user['user_id'].value
        # id = User.objects.get(user_id = user_id) # user_no
        # Survey.objects.create(user_no = id, reply_list = reply_list)
        # nuser.user_kind = 'A'
        # nuser.save()
        # return Response(status=status.HTTP_200_OK)
        return JsonResponse({'result' : "success"})
    return JsonResponse({'result' : "fail"})
    #return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)


# 아이디 중복검사 
@api_view(['GET'])
@permission_classes([AllowAny])
def checkid(request, id):
    try:
        id = User.objects.get(user_id = id)    
    except :
        id = None 
    if id is None :
        duplicate ="success"
    else : 
        duplicate = "fail"
    context= {'result' : duplicate}
    return JsonResponse(context)


# 로그인
@api_view(['POST'])
@permission_classes([AllowAny])
def signin(request):
    reqData=request.data
    user_id=reqData['user_id']
    password= reqData['password']
    print("id : ",user_id)
    row = serializers.serialize("json", User.objects.filter(user_id=user_id), fields = {"nickname", "password"})
    print(row)
    size= len(json.loads(row))
    print(size)
    if(size == 0):
        login ="fail"
        nick =None
    else : 
        password_n = json.loads(row)[0]['fields']['password']
        nickname_n = json.loads(row)[0]['fields']['nickname']
        print("비밀번호 " , password_n)
        if(password != password_n):
            login = "fail"
            nick = None
        else:
            login = "success"
            nick =nickname_n
    context= {'result' : login ,
              'nickname' : nick }
    return JsonResponse(context)

    

    