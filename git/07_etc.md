# ETC

> git 사용하면서 알게된 기타사항 정리

1. LF, CRLF

   - Git을 사용하다 보면 아래와 같은 경고 메시지를 종종 볼 수 있음

   ```bash
    LF will be replaced by CRLF in _파일_.
   The file will have its original line endings in your working directory
   ```

   - 우선 LF, CRLF란?

     - LF (Line-Feed)

       간단히 정리하면 Unix 계열에서 사용하는 방식

     - CRLF (Carriage-Return+Line-Feed)

       Windows, DOS에서 사용하는 방식

   - 줄바꿈에 대한 문자열이 다르기 때문에 이를 구분하는 것

   - WIndows를 상황에서 사용중이기 때문에 LF 방식이 CRLF로 변환될 것이라고 경고 메시지를 주는 것

   - 해당 메시지를 보지 않으려면 아래의 코드로 자동으로 변환시키면 된다

     ```bash
     git config --global core.autocrlf true
     ```

   - 참고 사이트 : [링크](https://dabo-dev.tistory.com/13)