from django.urls import path
from .views import alcoDetails, alcoIsLike , alcoPostReview, alcoReviewAPI, similarAlcoholAPI

urlpatterns = [
    path('detail/<alco_no>/<user_no>', alcoDetails),
    path('like', alcoIsLike),
    path('review', alcoPostReview),
    
    path('detail/<alcohol_no>', alcoReviewAPI),
    path('similar-alcohol/<int:alcohol_no>', similarAlcoholAPI)
]