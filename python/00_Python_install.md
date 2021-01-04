# Python install

## 1. 개요 및 특징

- 1990년대 만들어진 프로그래밍 교육 용도의 언어

- 데이터 처리, 행렬연산등에 용이하다

- 배우기가 쉽다(러닝커브가 얕다)

- 무료로 사용가능

- 교육용도로 시작하여 코드의 가독성이 높다

- 다양한 분야에 이용 가능

  - 웹 프로그래밍
  - DB 프로그래밍
  - 데이터 분석
  - AI

- 제한 분야

  - 모바일 어플리케이션

  - 시스템 프로그래밍

---



## 2. 개발환경 설정

- 일반적인 개발환경(일반 파이썬 프로그램, 웹 프로그램)
  - 파이참을 이용하면 편하다
  - 주피터 노트북도 사용할 수 있다

- 파이썬 2.X 버전 vs 3.X 버전

  - 버전간 간극이 커서 호환이 되지 않는다
  - 최신 버전은 현재(21/01/04) 3.8 버전
  - 우리는 3.7 버전을 사용할 예정 > Tensorflow 이용에 문제가 있다

- Anacnda 패키지를 설치하여 진행

  - [링크](https://www.anaconda.com/products/individual)

  - 무료로 사용가능, 파이썬과 여러 패키지를 쉽게 사용할 수 있도록 제공

  - 아나콘다 프롬프트를 관리자 권한으로 실행

  - pip를 최신버전으로 업데이트(python -m pip install --upgrade pip)

  - 콘다 가상환경 생성(conda create -n data_env python=3.7 openssl)

  - 생성된 가상환경으로 전환(conda activate data_env)

  - nb_conda라는 패키지 설치- 주피터 노트북 포함 (conda install nb_conda)

  - jupyter notebook라는 웹 기반 개발툴 사용

    우리가 만드는 파일이 원하는 폴더안에 저장되도록 홈 디렉토리를 설정

    jupyter notebook --generate-config로 설정 파일 생성

    notebook_dir을 찾아 앞에 #지우고 원하는 디렉토리로 변경(C:/python_ML)

  - python_ML 파일 생성하고 주피터 노트북을 실행(jupyter notebook)

