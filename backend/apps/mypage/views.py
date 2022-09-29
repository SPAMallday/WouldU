from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.db import connection


### MYPAGE
### mypage API

# statistics part
# MyFavAlcoholStatisticsAPI
@api_view(['GET'])
@permission_classes([AllowAny])
def MyFavAlcoholAPI(request):
    req_data = request.data
    # user_no = req_data['user_no']
    user_no = 1

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
    req_data = request.data
    user_no = req_data['user_no']
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
    req_data = request.data
    user_no = req_data['user_no']
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