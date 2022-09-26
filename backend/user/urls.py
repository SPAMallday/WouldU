from django.urls import path
from .views import signup, signin, checkid

urlpatterns=[
   
    #회원가입
    path('signup/', signup),
    path('signin/', signin),
    path('checkid/<id>', checkid)
]