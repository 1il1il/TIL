// web page의 흰색영역이 documnet(body)
// ready - 화면에 모든 html에 대한 정보를 다 출력했으면
$(document).on('ready', function (){

    $('h1').on('click',function (evnet) {
        // alert('클릭됨')
        // 이벤트가 발생했을때 어떤 element에서 event가 발생했는지를 파악
        // 파이썬의 self와 비슷 = this, $(this) : 클릭된 element를 지칭
        alert($(this).text())
    })
})
// 자주사용해서 아래와 같은 표현으로도 사용됨
$(document).ready(function () {

})

// 아직 h1이 등장하지 않아서 그냥 넘어감
$('h1').on('click',function (evnet) {
    alert('이건 실행안됨')
})

function my_func() {
    alert('클릭되었습니다')
}
function set_style() {
    $('h1').addClass('myStyle')
}

function release_style() {
    $('h1').removeClass('myStyle')
}

function add_event() {
    // h1을 찾아 해당 element에 event 처리능력 부여 (jQuery를 이용해서)
    // on('이벤트 종류', 동작할 함수)
    // function(event(발생한 이벤트에 대한 세부정보))
    $('h1').on('click', function (evnet) {
        alert('h1 클릭됨')
    })
}
