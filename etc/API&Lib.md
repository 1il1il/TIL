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



