from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse
from django.core import serializers

from user.serializer import UserSerializer

# Create your views here.
@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    user = UserSerializer(data=request.data)
    if user.is_valid():
        print("hi")
        user.save()
        return Response(status=status.HTTP_200_OK)
    return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)

    
