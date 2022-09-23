from django.urls import path
from .views import signup

urlpatterns=[
   
    #회원가입
    path('signup/', signup),
]