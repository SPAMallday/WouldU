from .models import Alcohol, Alcohol_recommend
from rest_framework import serializers

class AlcoholRecomSerializer(serializers.ModelSerializer):
    # alco_no = AlcoholSerializer(read_only=True)
    class Meta:
        model=Alcohol_recommend
        fields='__all__'

class AlcoholSerializer(serializers.ModelSerializer):
    alco_no = AlcoholRecomSerializer(read_only=True)

    class Meta:
        model=Alcohol
        fields='__all__'
