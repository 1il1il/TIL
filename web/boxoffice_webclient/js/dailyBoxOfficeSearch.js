function my_func() {
    // 사용자가 입력한 날짜를 가져와
    // 해당 날짜에 대한 boxoffice 순위를 알려주는 서버쪽 웹 프로그램을 호출
    // 그 결과를 화면에 호출
    let user_date = $('#userInputDate').val()
    let user_key = 'c802b4cefc5c250d9013ca769e658871'
    let open_api = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
    // let my_url = open_api + '?key=' + user_key + '&targetDt=' + user_date

    // 이렇게하면 화면이 refresh가 일어나서 원하는 작업을 할 수 없다
    // location.href = my_url
    // 이문제를 해결하기 위해 Javascript가 가지고 있는 특별한 통신방식 이용
    // AJAX 통신방식을 이용해서 이 문제를 해결
    // 순수 Javascript로 구현하기 너무 어렵고 힘들기 때문에 jQuery를 이용해 AJAX 구현
    $.ajax({
        url : open_api, // 호출할 서버쪽 프로그램의 url
        type : 'GET', // 서버쪽 프로그램에 대한 request 방식
        dataType : 'json', // 서버프로그램이 결과로 보내주는 데이터의 형식
        data : {
            key : user_key,
            targetDt : user_date
        }, // 서버 프로그램을 호출할때 전달되야하는 정보
        success : function (result) {
            $('#my_tbody').empty()
            // 서버로 부터 결과 json을 받아왔음
            // 이름 함수의 인자(result)로 받는다
            // json은 단순 문자열이라 사용하기 쉽지 않다
            // json를 javascript 객체로 변환해야한다
            // jQuery는 json을 javascript 객체로 바꿔 함수의 첫인자로 반환한다
            let movie_list = result['boxOfficeResult']['dailyBoxOfficeList']
            for (let i=0; i<movie_list.length; i++) {
                let m_lank = movie_list[i].rank
                let m_name = movie_list[i].movieNm
                let m_sales = movie_list[i].salesAcc
                let tr = $('<tr></tr>')
                let rank_td = $('<td></td>').text(m_lank)
                let title_td = $('<td></td>').text(m_name)
                let img_td = $('<td class="m_post"></td>')
                let sales_td = $('<td></td>').text(m_sales)
                let post_td = $('<td></td>')
                let post_btn = $('<input />').attr('type','button')
                    .attr('value','포스터보기').attr('id', m_lank)

                post_btn.on('click',function () {
                    let keyword = m_name
                    let img_tag = $('<img />')

                    $.ajax({
                        url : 'https://dapi.kakao.com/v2/search/image',
                        type : 'GET',
                        dataType : 'json',
                        data : {
                            query :keyword
                        },
                        headers : {
                            Authorization : 'KakaoAK c1c91e71e21bbee8cdc83ab7f30cbc51'
                        },
                        success : function (img_result) {
                            let img_url = img_result['documents'][0]['thumbnail_url']
                            img_tag.attr('src', img_url)
                        },
                        error : function () {
                            alert('실패')
                        }
                    })
                    $(this).parent().parent().children('.m_post').append(img_tag)
                })

                tr.append(rank_td)
                tr.append(title_td)
                tr.append(img_td)
                tr.append(sales_td)
                post_td.append(post_btn)
                tr.append(post_td)
                $('#my_tbody').append(tr)
            }
        },
        error : function () {
            alert('뭔가 이상함')
        }
    })
}