from django.urls import path
from .views import alcoDetails, alcoIsLike

urlpatterns = [
    path('detail/<alco_no>/<user_no>', alcoDetails),
    path('like', alcoIsLike)
]