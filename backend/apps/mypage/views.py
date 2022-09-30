from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.db import connection

from apps.wouldU.models import Review


##### MYPAGE
##### mypage API


# statistics part
# MyFavAlcoholStatisticsAPI
@api_view(['GET'])
@permission_classes([AllowAny])
def MyFavAlcoholAPI(request):
    user_no = request.META.get('HTTP_USER_NO')
    # user_no = 1

    cursor = connection.cursor()
    # 먹은 술 기준
    cursor.execute('''SELECT c.alcohol_type
                           , count(c.alcohol_type) count
                        FROM (SELECT a.alcohol_no
                                FROM review a
                               WHERE 1=1
                                 AND a.user_no = %s
                               UNION
                               SELECT a.alcohol_no
                                FROM user_alcohol a
                               WHERE 1=1
                                 AND a.user_no = %s
                              ) a
                           , alcohol b
                           , alcohol_code c
                       WHERE 1=1
                         AND a.alcohol_no = b.alcohol_no 
                         AND b.alcohol_code = c.alcohol_code 
                       GROUP BY c.alcohol_type
                       ORDER BY c.alcohol_type '''
                  , [user_no, user_no])
                  
    # 좋아요 누른 기준
    # cursor.execute('''SELECT c.alcohol_type
    #                        , count(c.alcohol_type) count
    #                     FROM alcohol_like a
    #                        , alcohol b
    #                        , alcohol_code c
    #                    WHERE 1=1
    #                      AND a.user_no = %s
    #                      AND a.is_like = 1
    #                      AND a.alcohol_no = b.alcohol_no 
    #                      AND b.alcohol_code = c.alcohol_code 
    #                    GROUP BY c.alcohol_type
    #                    ORDER BY c.alcohol_type '''
    #               , [user_no])  

#     try:
#         cursor.execute(query)
#     except:
#         return { 'resultCode':500, 'resultMsg': 'query execution fail : member info' }
    results = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) \
                for row in cursor.fetchall()]

    if results != None and len(results) > 0:
        result = results[0]
    # print(results)
    return Response(results)

# statistics part
# MyAlcoholStatisticsAPI
@api_view(['GET'])
@permission_classes([AllowAny])
def MyAlcoholStatisticsAPI(request):
    user_no = request.META.get('HTTP_USER_NO')
    # user_no = 1

    cursor = connection.cursor()
    cursor.execute('''SELECT avg(b.sweet) as 단맛
                           , avg(b.sour) as 신맛
                           , avg(b.body) as 바디감
                           , avg(b.scent) as 향
                        FROM (SELECT a.alcohol_no
                                FROM review a
                               WHERE 1=1
                                 AND a.user_no = %s
                               UNION
                               SELECT a.alcohol_no
                                FROM user_alcohol a
                               WHERE 1=1
                                 AND a.user_no = %s
                              ) a
                           , alcohol_recommend b
                       WHERE 1=1
                         AND a.alcohol_no = b.alcohol_no  '''
                  , [user_no, user_no])
#     try:
#         cursor.execute(query)
#     except:
#         return { 'resultCode':500, 'resultMsg': 'query execution fail : member info' }
    results = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) \
                for row in cursor.fetchall()]

    if results != None and len(results) > 0:
        result = results[0]
    # print(results)
    return Response(results)
    
# statistics part
# RegionalStatisticsAPI
@api_view(['GET'])
@permission_classes([AllowAny])
def RegionalStatisticsAPI(request):
    user_no = request.META.get('HTTP_USER_NO')
    # user_no = 1

    cursor = connection.cursor()
    cursor.execute('''SELECT c.region_name
                           , count(c.region_name) count
                        FROM (SELECT a.alcohol_no
                                FROM review a
                               WHERE 1=1
                                 AND a.user_no = %s
                               UNION
                               SELECT a.alcohol_no
                                FROM user_alcohol a
                               WHERE 1=1
                                 AND a.user_no = %s
                              ) a
                           , alcohol b
                           , region_code c
                       WHERE 1=1
                         AND a.alcohol_no = b.alcohol_no 
                         AND b.region_code = c.region_code 
                       GROUP BY c.region_name
                       ORDER BY c.region_name '''
                  , [user_no, user_no])

    results = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) \
                for row in cursor.fetchall()]

    if results != None and len(results) > 0:
        result = results[0]
    # print(results)

    return Response(results)
    
# review part
# MyFavListAPI
@api_view(['GET'])
@permission_classes([AllowAny])
def MyFavListAPI(request):
    user_no = request.META.get('HTTP_USER_NO')
    # user_no = 1

    cursor = connection.cursor()
    cursor.execute('''SELECT b.alcohol_no
                           , b.alcohol_name
                           , CONCAT('https://a402o1a4.s3.ap-northeast-2.amazonaws.com/', b.alcohol_no, '.png') alcohol_image
                        FROM alcohol_like a
                           , alcohol b
                       WHERE 1=1
                         AND a.user_no = %s
                         AND a.is_like = 1
                         AND a.alcohol_no = b.alcohol_no 
                       ORDER BY a.reg_date DESC '''
                  , [user_no])  

#     try:
#         cursor.execute(query)
#     except:
#         return { 'resultCode':500, 'resultMsg': 'query execution fail : member info' }
    results = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) \
                for row in cursor.fetchall()]

    if results != None and len(results) > 0:
        result = results[0]
    # print(results)
    return Response(results)
    
# review part
# MyReviewListAPI
@api_view(['GET'])
@permission_classes([AllowAny])
def MyReviewListAPI(request):
    user_no = request.META.get('HTTP_USER_NO')
    # user_no = 1

    cursor = connection.cursor()
    cursor.execute('''SELECT a.review_no
                           , b.alcohol_no
                           , b.alcohol_name
                           , CONCAT('https://a402o1a4.s3.ap-northeast-2.amazonaws.com/', b.alcohol_no, '.png') alcohol_image
                           , a.score
                           , a.comment
                        FROM review a
                           , alcohol b
                       WHERE 1=1
                         AND a.user_no = %s
                         AND a.alcohol_no = b.alcohol_no 
                       ORDER BY a.reg_date DESC '''
                  , [user_no])  

#     try:
#         cursor.execute(query)
#     except:
#         return { 'resultCode':500, 'resultMsg': 'query execution fail : member info' }
    results = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) \
                for row in cursor.fetchall()]

    if results != None and len(results) > 0:
        result = results[0]
    # print(results)
    return Response(results)

# review part
# DeleteReviewAPI
@api_view(['DELETE'])
@permission_classes([AllowAny])
def DeleteReviewAPI(request, no):
    user_no = request.META.get('HTTP_USER_NO')
    # user_no = 1
    
    try:
        review_no = Review.objects.filter(review_no = no, user_no=user_no)    
    except Review.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    print(review_no)
    review_no.delete()

    return Response(status=status.HTTP_204_NO_CONTENT)


    
