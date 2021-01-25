function my_func() {
    // css의 단점 : css가 호출될때마다 화면 다시 호출
/*    $('div').css('color', 'red')
    $('div').css('background-color', 'yellow')*/
    // div에 myStyle이라는 클래스 추가 = 이러면 myStyle로 설정한 값이 적용됨
    //$('div').addClass('myStyle')
    // 버튼 속성 제거
    //$('input[type=button]:first').removeAttr('disabled')
    // div중 클래스가 mystyle인거 찾아서 지우기
    // $('div.myStyle').remove()
    // empty() 자신은 삭제하지 말고 자신의 후손을 모두 삭제
    // $('div.myStyle').empty()
    // 새로운 요소를 추가하는 방법
    // $('<div></div>') : <div></div> 생성
    let my_div = $('<div></div>').text('소리없는 아우성')
    // 이와 같은 방법으로 새로운 요소를 생성할 수 있다
    // img 같이 끝나는 태그가 없는 경우
    //$('<img />').attr('src','img/googlelogo_color_160x56dp.png')
    // 새롭게 만든 요소를 내가 원하는 위치에 놓기
    // 4종류의 함수를 이용해서 내가 원하는 위치에 붙일수 있다
    let my_li = $('<li></li>').text('아이유')
    // 1. append() : 자식으로 붙이고 마지막 자식으로 붙는다
    // 새로운 li 추가
    /*$('ul').append(my_li)*/
    // 2. prepend() : 자식으로 붙이고 맨 처음 자식으로 붙인다
    /*$('ul').prepend(my_li)*/
    // 3. after() : 형제로 붙이고 바로 다음 형제로 붙는다
    /*$('ul > li:eq(1)').after(my_li)*/
    // 4. before() : 형제로 붙이고 바로 이전 형제로 붙인다
    $('ul > li:last').before(my_li)
}

function remove_func() {
    // div에 myStyle이라는 클래스를 제거
    $('div').removeClass('myStyle')
}