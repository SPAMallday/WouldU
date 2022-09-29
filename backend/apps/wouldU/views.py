from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.db import connection


### MAINPAGE 
### main page API

# like ranking 
# item : 10
@api_view(['GET'])
@permission_classes([AllowAny])
def RankingAPI(request):
    # result = Rank.objects.all() # [:10]
    # serializer = RankSerializer(result)     ######### alcohol name 가져ㅑ오는법
    # print(serializer)
    # return Response(serializer.data)
    cursor = connection.cursor()
    cursor.execute('''SELECT b.alcohol_name 
                           , a.ranking
                       FROM ranking a
                           , alcohol b
                       WHERE 1=1
                       AND a.alcohol_no = b.alcohol_no
                       ORDER BY a.ranking ''')

    results = [dict((cursor.description[i][0], value) for i, value in enumerate(row)) \
                for row in cursor.fetchall()]

    if results != None and len(results) > 0:
        result = results[0]
    # print(results)
    return Response(results)


# by review
# ordering : recent review 
@api_view(['GET'])
@permission_classes([AllowAny])
def RecentReviewAPI(request):
    # result = Review.objects.order_by('reg_date', 'alcohol_no').distinct('alcohol_no')[:10]     ######### alcohol name 가져ㅑ오는법
    # queryset = CrwalingModel.objects.order_by('enter_name').distinct('enter_name')
    # queryset = sorted(queryset, key=operator.attrgetter('created_at'), reverse=True)
    # serializer = RankSerializer(result)
    # print(serializer)
    # return Response(serializer.data)
    # result = Review.objects.raw('''SELECT a.alcohol_name
    #                                     , @ROWNUM := @ROWNUM + 1 
    #                                  FROM (SELECT distinct b.alcohol_name
    #                                          FROM review a
    #                                             , alcohol b
    #                                         WHERE 1=1
    #                                           AND a.alcohol_no = b.alcohol_no
    #                                         ORDER BY reg_date desc 
    #                                         LIMIT 0, 10 
    #                                       ) a
    #                                     , (SELECT @ROWNUM := 0)
    #                                 ''')
    # result = Review.objects.raw('''SELECT distinct b.alcohol_name as review_no
    #                                     , (@ROWNUM := @ROWNUM + 1) 
    #                                     , a.reg_date
    #                                 FROM review a
    #                                     , alcohol b
    #                                     , (SELECT @ROWNUM := 0) c
    #                                 WHERE 1=1
    #                                   AND a.alcohol_no = b.alcohol_no
    #                                 ORDER BY a.reg_date desc 
    #                                 LIMIT 0, 10
    #                                 ''')
    # data = serializers.serialize('json', result, fields=('review_no', 'rank', 'reg_date'))
    cursor = connection.cursor()
    cursor.execute('''SELECT a.alcohol_name
                           , @ROWNUM := @ROWNUM + 1 ranking
                           , a.reg_date
                        FROM (SELECT distinct b.alcohol_name as alcohol_name
                                   , a.reg_date
                                FROM review a
                                   , alcohol b
                               WHERE 1=1
                                 AND a.alcohol_no = b.alcohol_no
                               ORDER BY a.reg_date desc 
                               LIMIT 0, 10 
                             ) a
                           , (SELECT @ROWNUM := 0) b
                    ''')
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

    
