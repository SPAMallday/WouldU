import http
import json
from http.client import HTTPResponse
from re import search
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializer import AlcoholRecomSerializer, AlcoholSerializer
from .models import Alcohol, Alcohol_recommend, Alcohol_code
from django.http.response import JsonResponse
from django.core import serializers
# Create your views here.

# 술 상세정보 불러오기 
@api_view(['GET'])
@permission_classes([AllowAny])
def alcoDetails(request, alco_no):
    details = Alcohol.objects.select_related('alco_code').prefetch_related('alco_code').filter(alco_no = alco_no)
    details_reco= Alcohol_recommend.objects.filter(alco_no =alco_no)
    
    details_json = serializers.serialize("json", details)
    details_json_reco = serializers.serialize("json" ,details_reco)

    d1 =json.loads(details_json)[0]['fields']
    d2 =json.loads(details_json_reco)[0]['fields']



    
    # details = AlcoholSerializer(Alcohol.objects.select_related().get(alco_no = alco_no))
   
    # details_json = serializers.serialize("json", details)
    # print(json.load(details)) 
    
    d1.update(d2)
    return JsonResponse(d1)

