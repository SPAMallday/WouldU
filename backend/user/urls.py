from django.urls import path
from .views import signup, signin

urlpatterns=[
   
    #회원가입
    path('signup/', signup),
    path('signin/', signin),
]