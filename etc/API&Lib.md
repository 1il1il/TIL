# API 사용 예시

- [카카오 지도 API](https://apis.map.kakao.com/web/guide/) : 키워드로 상세주소 찾기

```python
import requests
from urllib.parse import urlparse


keyword = '관악디자인거리'
url = 'https://dapi.kakao.com/v2/local/search/keyword.json?&query=' + keyword
result = requests.get(urlparse(url).geturl(), headers={'Authorization': 'KakaoAK KEY'}).json()
print(result)
```



- [카카오 이미지 검색](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide) : 키워드로 이미지 검색하기

```python
keyword = '홍릉수목원'
url = 'https://dapi.kakao.com/v2/search/image?&query=' + keyword
result = requests.get(urlparse(url).geturl(), headers={'Authorization': 'KakaoAK KEY'}).json()
print(result['documents'][0]['thumbnail_url'])
```



- [카카오 주소로 좌표 찾기 ](https://developers.kakao.com/docs/latest/ko/local/dev-guide): 입력된 주소에 대한 정보 출력 (좌표 정보도 포함)

```python
url = 'http://dapi.kakao.com/v2/local/search/address'
params = {'query': '서울 중랑구 신내동 602-1', 'output_coord': 'WGS84'}
header = {'Authorization': 'KakaoAK APIKEY'}
result = requests.get(url, headers = header, params = params).json()

# 리턴받은 데이터중 x, y 좌표를 가져옴 (기본값: WGS84)
print(result['documents'][0]['address']['x'], result['documents'][0]['address']['y'])
```





- [일일 박스오피스](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do) : 일자별 일일 박스오피스 검색하기

```python
import numpy as np
import pandas as pd
import json
import urllib

open_api = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
query_string = '?key=KEY'
open_api_url = open_api + query_string

# url을 이용해서 호출하는 행위 = request
page_obj = urllib.request.urlopen(open_api_url)
#response객체를 얻음, 이 안에 우리가 원하는 json이 포함되있음
print(page_obj.read())

page_obj = urllib.request.urlopen(open_api_url)
json_page = json.loads(page_obj.read())

my_dict = dict()
rank_list = list()
title_list = list()
sales_list = list()

# 필요한 데이터를 뽑아서 리스트로 만들기
for tmp_dict in json_page['boxOfficeResult']['dailyBoxOfficeList']:
    rank_list.append(tmp_dict['rank'])
    title_list.append(tmp_dict['movieNm'])
    sales_list.append(tmp_dict['salesAmt'])

# 리스트를 이용해서 dict를 만들기
my_dict['순위'] = rank_list
my_dict['제목'] =title_list
my_dict['매출액'] =sales_list

# dict로 DataFrame을 만들기
df = pd.DataFrame(my_dict)
display(df)
```



- [동네예보 조회서비스](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057682) : 지역별 날시 예보 가져오기

```python
import requests
from urllib.parse import urlparse

# 3시간 단위 예보
serviceKey = 'serviceKey=KEY'
dataType = '&dataType=JSON'
base_date = '&base_date=20210207'
base_time = '&base_time=0200'
nx = '&nx=55'
ny = '&ny=127'
numOfRows ='&numOfRows=300'
url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?' + serviceKey + dataType + base_date + base_time + nx + ny + numOfRows
result = requests.get(urlparse(url).geturl()).json()
print(result)
```






# LIbrary 사용 예시

- [위키백과](https://wikipedia.readthedocs.io/en/latest/code.html#module-wikipedia) : 위키백과 검색결과 가져오기

```python
import wikipedia as wk

# 키워드에 대한 검색목록 출력
wk.search(keyward)

# 키워드에 대한 검색결과 출력
wk.summary(keyward)

# 위키피디아 한국어 설정
wk.set_lang('ko')

# DisambiguationError : 검색결과가 다양한때 출력되는 에러
wk.exceptions.DisambiguationError

# PageError : 검색되는 페이지가 없을때 출력되는 에러
wk.exceptions.PageError
```



