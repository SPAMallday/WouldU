from django.urls import path
from .views import alcoDetails

urlpatterns = [
    path('detail/<alco_no>', alcoDetails)
]