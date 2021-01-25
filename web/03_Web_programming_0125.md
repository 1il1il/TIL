# Web Programing

## 1. jQuery

### 1. selector 

> HTML element를 지칭하는 특수한 표기법

   1. 구조 선택자 : 부모, 자식, 형제 관계를 이용해서 선택

      - ` (공백)` :  후손 (자손을 포함한 모든것)
      - `+` : 바로 다음에 나오는 형제
       + `~` : 뒤에 나오는 모든 형제 지칭

   2. 속성 선택자 : 속성을 이용하여 선택

      - input 태그중 type 속성을 가진 input을 찾기

          ```javascript
          $('input[type]')
          ```

      - input 태그중 type 속성이 button인 input을 찾기

          ```javascript
          $('input[type=button]')
          ```
      
   3. 순서를 이용한 선택자

      - `:first` : 해당 요소의 첫번째 요소에 접근
      - ol 태그의 자식인 li중 첫번째 li 태그가 가진 문자열을 콘솔창에 출력

          ```javascript
          console.log($('ol > li:first').text())
          ```

      - `:last` : 해당 요소의 마지막 요소에 접근
      - ol 태그의 자식인 li중 마지막 li 태그가 가진 문자열을 콘솔창에 출력

          ```javascript
          console.log($('ol > li:last').text())
          ```

      - eq() : index를 이용아여 요소에 접근
      - ol 태그의 자식인 li중 두번째(1) li 태그가 가진 문자열을 콘솔창에 출력

          ```javascript
          console.log($('ol > li:eq(1)').text())
          ```

   4. 종합

      - ol 태그의 자식중 첫번째 li태그의 그 다음 li 태그

          ```javascript
          console.log($('ol > li:first + li').text())
          ```

      - 반복처리

        - ol 태그의 자식인 li 태그들에 접근하여 순차적으로 태그가 담고 있는 문자열 + '입니다 ' 출력

            ```javascript
            $('ol > li').each(function(idx, item) {
                console.log($(item).text() + '입니다')
            })
            ```

        - 이름이 없는 함수 (묵시적 함수, lambda 함수)

          - 함수를 독립적으로 선언하지 못하고 변수에 담아서 사용해야함
          - 함수를 하나의 값으로 인식 (first class)
          - 함수가 하나의 값으로 사용되기 때문에 함수를 다른 함수의 인자로 활용가능

              ```javascript
              let test = function() {}
              ```

---

### 2. 원하는 요소에 접근하기

- Base HTML

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <script
               src="https://code.jquery.com/jquery-2.2.4.min.js"
               integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
               crossorigin="anonymous"></script>
       <script src="js/jQuery_sample01.js"></script>
   </head>
   <body>
       <div>
           <ul>
               <li id="apple">사과</li>
               <li id="pineapple">파인애플</li>
               <li class="myList">참외</li>
           </ul>
           <form action="서버쪽 프로그램을 명시" method="post">
               <input type="text" id="uId" size="20">
           </form>
           <ol>
               <li class="myList">고양이</li>
               <li class="myList">호랑이</li>
               <li class="myList">강아지</li>
           </ol>
           <input type="button" value="클릭" onclick="my_func()">
       </div>
   </body>
   </html>
   ```

   1. text()

      - text() : 태그 사이의 문자열에 접근
      - pineapple을 id로 같는 태그 사이의 문자열을 가져와 콘솔에 출력

          ```javascript
          console.log($('#pineapple').text())
          ```

      - text('`str`') : 태그안  문자열 변경하여 콘솔에 출력
      - apple을 id로 같는 태그 사이의 문자열을 '소리없는 아우성!'으로 바꿔 콘솔에 출력

          ```javascript
          console.log($('#apple').text('소리없는 아우성!'))
          ```

   2.  val() : `<input>`에 사용자가 입력한 데이터를 가져오는 함수

      - type 속성이 text인 input 태그에 있는 데이터를 콘솔창에 출력 

          ```javascript
          console.log($('input[type=text]').val())
          ```

   3. attr() : 해당 요소의 특성을 알아오기

      - attr('`attr`') :  `attr` 특성의 값에 접근
      - type 속성이 text인 input 태그의 id 특성의 값을 콘솔창에 출력

          ```javascript
          console.log($('input[type=text]').attr('id'))
          ```

      - attr('`attr`', `value`) : `attr` 특성의 값dmf `value`로 변경
      - type 속성이 text인 input 태그의 size 특성의 값을 변경

          ```javascript
          $('input[type=text]').attr('size', 10)
          ```

    4. addClass('`class`') : 태그에 class를 추가

       - div에 myStyle이라는 class 추가

           ```javascript
           $('div').addClass('myStyle')
           ```

    5. removeAttr('`attr`') : `attr`속성을 지우기

       - type 속성이 text인 input 태그의 disabled 속성을 제거

           ```javascript
           $('input[type=button]').removeAttr('disabled')
           ```

    6. remove() : 요소 지우기

       - 클래스가 myStyle인 div 태그를 찾아서 지우기

           ```javascript
           $('div.myStyle').remove()
           ```

    7. empty() : 자신은 삭제하지 않고 자신의 후손을 모두 삭제

       - 클래스가 myStyle인 div 태그의 모든 후손을 삭제

           ```javascript
           $('div.myStyle').empty()
           ```

### 3. 새로운 요소 추가하기

> Bass HTML

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script
            src="https://code.jquery.com/jquery-2.2.4.min.js"
            integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
            crossorigin="anonymous"></script>
    <script src="js/jQuery_sample02.js"></script>
</head>
<body>
    <div>
        <ul>
            <li>김연아</li>
            <li>이순신</li>
            <li>강감찬</li>
        </ul>
    </div>
    <input type="button" value="클릭"
           onclick="my_func()">
</body>
</html>
```

- $('<></>') : <>태그를 갖는 새로운 요소를 추가한다

- '아이유' 문자열을 갖는 `<li>` 태그를 만들어 my_li 변수에 할당

  ```javascript
  let my_li = $('<li></li>').text('아이유')
  ```

- 새로운 요소를 화면에 출력하는 방법

  1. append() 

     - 새로운 요소를 현재 요소의 자식으로 만들고 마지막 자식으로 붙인다
     - ul 태그의 자손의 마지막으로 my_li를 추가

         ```javascript
         $('ul').append(my_li)
         ```

  2. prepend()

     - 새로운 요소를 현재 요소의 자식으로 만들고 첫번째 자식으로 붙인다

     - ul 태그의 자손의 첫번째로 my_li를 추가
  
       ```javascript
       ('ul').prepend(my_li)
       ```
  
  3. after()
  
     - 새로운 요소를 현재 요소의 형제로 만들고 바로 다음 형제로 붙인다
  
     - ul 태그의 자손중 두번째 li 태그의 다음 형제로 my_li를 추가
  
       ```javascript
       $('ul > li:eq(1)').after(my_li)
       ```
  
  4. before()
  
     - 새로운 요소를 현재 요소의 형제로 만들고 바로 이전 형제로 붙인다
  
     - ul 태그의 자손중 마지막 li 태그의 이전 형제로 my_li를 추가
  
       ```javascript
       $('ul > li:last').before(my_li)
       ```

## 2. Web Programing 실습

- 일일 박스오피스를 확인하는 웹 페이지 만들기

- 영화진흥위원회의 [Open API](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)를 이용해서 특정 날짜의 일일 박스오피스 순위를 받아와 화면에 출력

- Bootstrap의 [예제](https://getbootstrap.com/docs/5.0/examples/dashboard/)를 활용하여 웹 페이지 구성

  ```html
  <!doctype html>
  <html lang="en">
  <head>
      <meta charset="utf-8">
      <title>BoxOffice Search</title>
      <!-- Bootstrap도 jQuery를 사용해서 jQuery가 먼저 나와야함-->
      <script
              src="https://code.jquery.com/jquery-2.2.4.min.js"
              integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
              crossorigin="anonymous"></script>
  
  
      <!-- Bootstrap core CSS -->
      <!-- Bootstrap도 CDN으로 사용함 -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
  
      <style>
          .bd-placeholder-img {
              font-size: 1.125rem;
              text-anchor: middle;
              -webkit-user-select: none;
              -moz-user-select: none;
              user-select: none;
          }
  
          @media (min-width: 768px) {
              .bd-placeholder-img-lg {
                  font-size: 3.5rem;
              }
          }
      </style>
  
      <!-- Custom styles for this template -->
      <link href="css/dashboard.css" rel="stylesheet">
  
      <!-- 내가 작성한 스크립트는 가장 아래 있는게 좋다 -->
      <script src="js/dailyBoxOfficeSearch.js"></script>
  
  </head>
  <body>
  
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">BoxOffice</a>
      <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <input class="form-control form-control-dark w-100"
             type="text" placeholder="날짜를 입력하세요(YYYYMMDD)"
             id='userInputDate' aria-label="Search">
      <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
              <a class="nav-link" href="#"
              onclick="my_func()">검색</a>
          </li>
      </ul>
  </header>
  
  <div class="container-fluid">
      <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div class="position-sticky pt-3">
                  <ul class="nav flex-column">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">
                              <span data-feather="home"></span>
                              순위조회
                          </a>
                      </li>
                  </ul>
              </div>
          </nav>
  
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <!-- a element는 hyperlink를 만들어주는 element
                   href속성 다음에 있는 url로 get방식의 request를 보냄 -->
              <!-- <a href="http://www.naver.com">네이버로 가기</a> -->
              <h2>일일 박스오피스 순위</h2>
              <div class="table-responsive">
                  <table class="table table-striped table-sm">
                      <thead>
                      <tr>
                          <th>순위</th>
                          <th>영화제목</th>
                          <th>누적관객수</th>
                          <th>누적매출액</th>
                          <th>개봉일</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>1,001</td>
                          <td>Lorem</td>
                          <td>ipsum</td>
                          <td>dolor</td>
                          <td>sit</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          </main>
      </div>
  </div>
  
  </body>
  </html>
  ```

- Javascript 코드

  ```javascript
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
          success : function () {
              alert('서버 호출 성공')
          },
          error : function () {
              alert('뭔가 이상함')
          }
      })
  }
  ```

  