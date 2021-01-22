function hello() {
    alert('버튼이 클릭되었어요!')
    user_key = $('#userKey').val()
    // c802b4cefc5c250d9013ca769e658871
    user_date = $('#userDate').val()
    open_api = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
    my_url = open_api + '?key=' + user_key + '&targetDt=' + user_date
    // location : 현재 창 .href : url 바꾸기
    location.href = my_url
}
