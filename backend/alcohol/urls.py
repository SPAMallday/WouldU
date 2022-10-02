from django.urls import path
<<<<<<< HEAD
from .views import alcoDetails, alcoIsLike , alcoPostReview, alcoReviewAPI, similarAlcoholAPI
=======
from .views import alcoDetails, alcoIsLike , alcoPostReview, RankByUserKind
>>>>>>> 7f45649de5ff53c0512220ec1a4ec1fa3a37d90e

urlpatterns = [
    path('detail/<alco_no>/<user_no>', alcoDetails),
    path('like', alcoIsLike),
    path('review', alcoPostReview),
<<<<<<< HEAD
    
    path('detail/<alcohol_no>', alcoReviewAPI),
    path('similar-alcohol/<int:alcohol_no>', similarAlcoholAPI)
=======
    path('rank-type/<user_no>', RankByUserKind)
>>>>>>> 7f45649de5ff53c0512220ec1a4ec1fa3a37d90e
]