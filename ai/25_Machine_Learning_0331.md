# TFRecord

- 일반적으로 프로그램이 병목현상을 겪게 되는데 가장 큰 요인중 하나가 IO
- tensorflow에서는 이 문제를 해결하기 위해 `TFRecord`를 사용

- `TFRecord`는 tensorflow로 deep learning할때 필요한 데이터를 보관하기 위한 자료구조, 데이터 포맷
- tensorflow의 표준 데이터 포맷(binary 데이터 포맷)

- 입력데이터(x)와 label(t)을 하나의 파일에서 관리할 수 있다

- 압축파일로 만들어져 속도와 용량 측면에서 상당한 이득