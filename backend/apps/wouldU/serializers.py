from .models import Rank
from rest_framework import serializers

class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = '__all__'
        
    # serializers.Serializer 일 경우
    # def create(self, validated_data):
    #     return Rank.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.content = validated_data.get('content', instance.content)
    #     instance.save()
    #     return instance
