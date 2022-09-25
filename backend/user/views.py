from dataclasses import field
import json
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import User
from survey.models import Survey

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
    reply_list=''.join(str(x) for x in request.data['reply_list']) #json 리스트를 문자열로 
    print(reply_list)
    if user.is_valid():
        user.save()
        return Response(status=status.HTTP_200_OK)
    return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)

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
        return Response("fail", status = status.HTTP_204_NO_CONTENT)
    else : 
        password_n = json.loads(row)[0]['fields']['password']
        nickname_n = json.loads(row)[0]['fields']['nickname']
        print("비밀번호 " , password_n)
        if(password != password_n):
            return Response("fail", status = status.HTTP_204_NO_CONTENT)
        return Response(nickname_n, status = status.HTTP_200_OK)

    

    
