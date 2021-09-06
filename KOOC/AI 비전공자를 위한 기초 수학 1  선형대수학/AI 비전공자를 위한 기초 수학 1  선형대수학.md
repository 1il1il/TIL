# [AI 비전공자를 위한 기초 수학 1 : 선형대수학](https://kaist.edwith.org/mathforai#)

## Week 1

### 인공지능이란?

- 인간과 닮은 지능을 가진 기계나 시스템
- 목적을 달성하기 위해 만든 인간 지능과 닮은 시술
- 인간의 학습 방법 (인식 > 이해 > 반응)
- 튜링 테스트
  - 3명의 질문자중 최소 1명이 기계를 인간으로 지명하면 통과
  - 2014년 유진 구스트만이 최초 통과
  - 2018 google duplex demo

### 인공지능은 왜 이제서야 나타났나요?

- BIg Data
  - 데이터의 폭발적인 증가
- Hardware
  - 단순한 연산을 한번에 병렬처리 할 수 있는 GPU의 발전
- Cloud
  - 인프라의 발전
- 알고리즘
  - 인공지능에 대한 다양한 알고리즘 개발

### 4차 산업혁명? 인공지능?

- CPS(Cyber Physical System)
- 자율주행

### 인공지능이 잘 푸는 문제

- 분류, 회귀, 예측 (지도 학습)
- 그룹화, 이상값 감지 (비지도 학습)
- 강화학습
  - 정답에 가까울수록 보상제공
  - 인과관계
  - 경험데이터 학습

### 인공 신경망 (ANN)

- 뉴런의 정보전달의 선형성이 선형대수와 비슷하다

### 서포트 벡터 머신 (SVM)

- 분류를 잘하는 선을 찾는 방법
  - 2차원: 선, 3차원: 평면, 4차원 이상: Hyperplane
- 좋은 분류기준?
  - Margin을 최대화하는 기준

## Week 2

### 선형대수학의 쓰임새

- 선형대수학을 인공지능 알고리즘을 만드는데 쓸 수도 있다
- SVM, Depp Learning 알고리즘에 많이 쓰임
- 서치 엔진을 만들때 선형대수학이 근간이 된다
  - SVD(Singular Value Decomposition) 

### 선형대수학의 기초

- 행렬
- 선형대수학
  - System of linear algebraic equations
  - AX = B, UX = C의 해가 같으면 같은 시스템이다
  - Row Operations

### 선형대수학을 AI에 어떻게 활용하는가 

## Week 3

### Row Operations

- Upper Triangular Matrix를 만들어서 해를 찾을 수 있다

### homogeneous system of linear algebraic equation

- 우변이 전부 0인 식
- AX = 0 형태
- X = 0인 해는 존재하는 상황
- 대각 성분이 0이 아니면 유일한 해를 갖는다
- 대각 성분이 0이 있다면 해가 없거나 무한한 해를 갖는다

### Vector Space

- R^n: n차원 벡터의 모임

### Linear combination of vectors

- u = a1v1 + a2v2 + ... + akvk

## Week 4

### Linearly independent 

- 임의의 한 벡터가 다른 벡터들의 합으로 표현되지 않는 경우

- a1v1 + a2v2 + ... + akvk = 0에서 a1=a2=...=ak=0만이 유일한 해이면 linearly independent 

### Identity matrix

- 대각 원소가 모두 1이고 나머지 원소는 0인 행렬

### Inverse of a square matrix

- 역행렬이 존재한다면 그 역행렬은 유일하다

## Week 5

### Determinant of Square Matrix

- upper triangular matrix를 이용하면 비교적 쉽게 계산 가능
  - 대각 원소의 곱
- A를 U로 변환후 판별식 계산
  - 이때 진행한 row operations에 따라 판별식이 달라짐
    - i <-> j인 경우 (-1)*det(A)=det(B)
    - i -> ai + bj인 경우 a*det(A)=det(B)

### Eigenvalue Problem

- characteristic (polynomial) equation of A
  - det(A-λI) = 0
- 차원수를 줄일 수 있는 특별한 수
