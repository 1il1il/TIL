// javascript에 대해 알아보기
// 1. 변수선업(파이썬과 거의 비슷)
var my_variable = '100'
let tmp1 = 'sample' // string
let tmp2 = 3.14; //number
let tmp3 = true; // boolean
let tmp4 = [1, 2, 3, 4] // array

// 출력
// alert(), console.log()
// alert(tmp1) // blocking method : 여기에서 코드의 수행이 일시 중지
console.log('변수의 값 : '+tmp1)

// javascript 객체 (python의 dict와 같은 구조 => 데이터 표현 방식으론 JSON)
let obj = { name : '홍길동',
            age : 25 }
console.log(obj)

// 함수 만들기
function add(x,y) {
    return x+y
}
alert(add(10, 20))

// 이러한 javascript를 이용해서 화면제어 처리