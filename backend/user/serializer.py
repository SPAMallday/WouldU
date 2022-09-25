from .models import User
from survey.models import Survey
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# class SurveySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Survey
#         fields = '__all__'

