from django.urls import path
from .views import alcoDetails, alcoIsLike , alcoPostReview, RankByUserKind

urlpatterns = [
    path('detail/<alco_no>/<user_no>', alcoDetails),
    path('like', alcoIsLike),
    path('review', alcoPostReview),
    path('rank-type/<user_no>', RankByUserKind)
]