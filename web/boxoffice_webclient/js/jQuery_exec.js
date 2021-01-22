function my_func() {
    // 버튼을 누르면 호출되는 함수
    // jQuery의 사용법
    // 1. selector
    // selector는 HTML엘리먼트를 지칭하는 특수한 표기법을 의미
    // jQuery는 $로 시작
    // $(selector).method()
    // 1-1. 전체 선택자 : *
    // $('*').css('color','red') //모든 엘리먼트 찾아서 색상을 빨간색으로 바꾸기
    // 1-2. 태그 선택자 : 태그명을 가지고 선택
    // $('span').remove()
    // $('li').css('background-color','yellow')
    // 1-3. Id 선택자 : Id속성을 이용해서 선택(Id 값은 유일해서 원하는 특정 엘리먼트를 가져올수 있다)
    // $('#inchon').text('소리없는 아우성!')
    // 1-4. 클래스 선택자 : class속성을 이용해서 선택(Id와 유사하지만 클래스는 유일하지 않다)
    // $('.region').css('color','blue')
    // 1-5. 구조선택자 : 부모, 자식, 형제 관계를 이용해서 선택(ol(=태그 선택자) >(=구조선택자) li(=태그 선택자))
    $('ol > li').css('color','red')
}