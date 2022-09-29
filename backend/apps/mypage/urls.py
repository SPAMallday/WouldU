from django.urls import path

from apps.mypage.views import RegionalStatisticsAPI, MyAlcoholStatisticsAPI, MyFavAlcoholAPI

urlpatterns=[
   
    # mypage
    # path('region-staticstic', RegionalStatisticsAPI),
    # path('my-alcohol-staticstic', MyAlcoholStatisticsAPI),
    # path('my-fav-alcohol-staticstic', MyFavAlcoholStatisticsAPI),
    path('region', RegionalStatisticsAPI),
    path('my-alcohol', MyAlcoholStatisticsAPI),
    path('my-fav-alcohol', MyFavAlcoholAPI),
]



