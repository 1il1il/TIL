# Web programming

- Web programming : HTTP Protocol로 통신하는 클라이언트 프로그램과 서버 프로그램을 개발

- Protocol : 데이터 통신에 대한 서로 지켜야 하는 약속, 규약
  - 웹 클라이언트 프로그램
  - 웹 서버 프로그램 (Django:장고)
- 각자 따로 개발할 수도 있고 함께 개발도 가능

---

- Web program은 CS구조로 되어 있다 (Client, Server)
- Client가 능동적으로 서비스를 요청
- Server는 클라이언트의 요청에 대해 특정 서비스를 제공
- Web Client : Web server에 접속하는 클라이언트 프로그램
  - Browser(크롬, IE, Safari, 파이어 폭스...)

- Web server : Web Client의 요청을 받아 서비스를 제공하는 프로그램
  - Apache Web Server

---

- Web Client Application : HTML, CSS, Javascript
- Web Server Application : Django(python), servlet(java)



- Protocol
- Port : 0 ~65535사이의 하나의 숫자 (포트번호)
  - 0~1024 : reserved (예약)
  - 1025~65535 : 사용자가 이용가능
  - 하나의 프로세스(프로그램)를 지칭
  - 우리 컴퓨터에서 작동되는 프로그램
    - zoom(3000)
    - notepad(4000)
    - chrome(5000)
    - 탐색기(6000)
    - ...
  - 외부에서 우리 컴퓨터를 찾아올려면 IP 주소를 통해 찾아올수 있다
  - 우리 컴퓨터에 접속후 특정 프로그램에 접근할려면 프로그램에 할당된 Port번호가 필요하다
- IP 주소(Address) : Network에 연결되어 있는 각종 기기에 부여되는 논리적인 주소(4자리-ipv4)
- MAC Address : Network에 연결되어 있는 각종 기기에 부여되는 물리적인 주소(6자리)
  - IP를 MAC으로 변경하는 Protocol도 있다
- (http://)(192.168.0.1)(:4000)
- (Protocol)(IP)(Port)

---

- Web Client에서 서버로 요청(Request)를 보냄 ex) http:// protocol기반의 요청 전송
- Web Server (Port : 80)에선 요청을 받고 그에 맞는 반응(Response)를 보냄
  - Server와 Client가 서로 다른 장소에 있으면 우선 서로 연결(Connect)을 해야함
  - 이때 Request가 있을때만 연결하고 끝나면 연결을 끊는다(HTTP protocol의 특징) - server에 다수의 사용자가 연결하기 때문에 서버 부하를 줄이기 위해연결을 끊는다(Stateless) - 그래서 HTTP Protocol을 Stateless Protocol이라고도 함
  - 문제 : Server가 Client를 구별할 수 없다
  - 이러한 문제를 해결하기위해 세션 트래킹을 사용함

---

- Web Client(Web Client Program) : 우리가 작성해서 사용하거나, 제공된 프로그램을 이용해서 사용할 수 있다

- Web Server(Web Server Program) : Performance가 중요해서 일반적으로 우리가 작성하지 않는다. 프로그램을 이용하여 사용한다(Apache, IIS, Oracle Webserver...)

- Protocol
  - HTTP : web 전용
  - FTP : 파일 전송 전용
  - SMTP : e-mail

- IP, Port

- Request, Response

---

- HTTP Protocol(HyperText Transfer Protocol)
- 웹서버와 웹 클라이언트가 서로 데이터를 주고 받기위해 사용하는 통신규약
- TCP/IP Protocol stack위에서 동작하는 Protocol = IP Address를 기반한 통신
- HTTP > Text뿐만 아니라 이미지, 동영상, pdf등 다양한 데이터를 주고 받을 수 있다

---

- HTTP Request Message

  - GET(요청방식) /URL HTTP/1.1
  - Host : www.example.com

  body

- 요청방식(4가지 존재)
  - GET - 정보를 받아올때
  - POST - 서버에 새로운 데이터를 생성할때
  - PUT - 수정할때
  - DELETE - 데이터 삭제할때

- 두가지 방식(GET, POST)으로도 모든 CRUD 작업이 가능하다
  - 이렇게 사용할 예정
  - GET 방식 : 내가 전달할 데이터를 Query String 형식으로 URL뒤에 붙여서 보낸다(예전에 영화진흥원 Open API 사용할때 이용한 방식)
    - 장점 : 사용하기 쉽다
    - 단점 : 보안성이 없다, URL은 길이제한이 있다
  - POST 방식 : Request message body 부분에 데이터를 포함해서 전송
    - 장점 : 보안성이 있고, 보낼려는 데이터의 길이제한이 없다

---

- Web Server vs WAS(Web Application Werver)
  - Web Server : 정적 Reqeust에 대한 Response
  - 서버가 가지고 있는 데이터를 요청할때
- WAS에는 다양한 Application이 있다
  - 만약 서버에서 처리할 수 없다면 해당 Reqeust가 WAS로 넘어감
  - WAS에서 적절한 Application을 이용해서 Request를 처리

![image-20210121133918593](md-images/image-20210121133918593.png)



- Static Web
  - WAS를 거치지 않음

![image-20210121141113057](md-images/image-20210121141113057.png)

- WebStorm을 이용하여 HTML 작성

  1. Web Server Program 실행 - Webstorm의 내장 웹서버 이용

  2. 웹 서버가 우리 project를 인식해야 나중에 클라이언트가 요청 했을대 서비스를 제공 받을 수 있음 - configure

  3. 우리 project를 웹에서 사용할 수 있도록 전개 - deploy
  4. 클라이언트 실행 URL입력