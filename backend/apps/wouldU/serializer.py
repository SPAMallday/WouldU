from .models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        # fields = ['user_id', 'password', 'nickname', 'gender', 'birth']

# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = ("post_id", "contents")

#     def to_representation(self, instance):
#         self.fields['post_id'] =  PostRepresentationSerializer(read_only=True)
#         return super(CommentSerializer, self).to_representation(instance)


# class PostSerializer(serializers.ModelSerializer):
#     post = CommentSerializer(many=True, read_only=True)

#     class Meta:
#         model = Post
#         fields = ("id", "title", "contents", "post")


# class PostRepresentationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Post
#         fields = ("id", "title", "contents")