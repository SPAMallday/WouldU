from django.urls import path
from .views import RankingAPI


    # url('post', PostViewSet.as_view({'get':'list', 'post':'create'})),
    # url('comment', CommentViewSet.as_view({'get':'list', 'post':'create'})),
urlpatterns=[
   
    # 메인
    path('', RankingAPI),
]