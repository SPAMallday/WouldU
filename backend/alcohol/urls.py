from django.urls import path
from .views import alcoDetails, alcoIsLike , alcoPostReview

urlpatterns = [
    path('detail/<alco_no>/<user_no>', alcoDetails),
    path('like', alcoIsLike),
    path('review', alcoPostReview)
]