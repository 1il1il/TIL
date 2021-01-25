// 명시적 함수 - 이름 존재
function my_func() {
    // 적절한 코드 작성
    // text() : 태그사이 문자열 가져오기, text('str') : 태그안 문자열 변경
    // console.log($('#apple').text('소리없는 아우성!'))
    // console.log($('#pineapple').text())
    // ul의 자식중에 class가 myList인것 찾기
    // console.log($('ul > .myList').text())
    // console.log($('input[type=text]').val())
    // console.log($('#uId').val())
    // input 태그의 id 알아오기
    // console.log($('input[type=text]').attr('id'))
    // input 태그의 size 변경하기
    // $('input[type=text]').attr('size', 10)
    // :first 순서를 가지고 선택하는 선택자
    // console.log($('ol > li:first').text())
    // :last 마지막을 찾는 선택자
    // console.log($('ol > li:last').text())
    // ol의 자식중에(ol >) 첫번째 찾아서(:first) 그 다음 li(+ li) 찾기
    // console.log($('ol > li:first + li').text())
    // eq() : 순서를 이용해서 찾기 (0부터 시작)
    // console.log($('ol > li:eq(1)').text())
    // 반복처리 each()
    /*$('ol > li').each(function(idx, item) {
        console.log($(item).text() + '입니다')
    })*/
}
// 이름이 없는 함수 - 묵시적 함수 lambda 함수
// 함수를 독립적으로 선언하지 못하고 변수에 담아서 사용해야함
// 함수를 하나의 값으로 인식 = first class
// 함수가 하나의 값으로 사용되기 때문에 함수를 다른 함수의 인자로 활용가능
let kaka = function() {

}