# 1. Machine Learning

- AI(Artificial Intelligence)
- Machine Learning
- Deep Learning

## 1. AI(Artificial Intelligence)

- 인간이 가지는 특유의 학습능력, 추론능력을 컴퓨터로 구현하려는 가장 포괄적인 개념



## 2. Machine Learning

- AI를 구현하는 다양한 방법론중 하나
- 데이터의 특성과 패턴을 학습하여 미지의 데이터에 대한 추정치를 계산하는 프로그래밍 기법
  - Regression(회귀)
  - SVM(Support Vector Machine)
  - Decision Tree
  - Random Forest
  - Naive Bayes
  - KNN
  - Neural Network(신경망)
    - 신경망을 이용해서 학습하는 구조와 알고리즘이 최근에 개선, 개발됨 
    - Deep Learning라고도 부름(CNN, RNN, LSTM, GAN...)
  - Clustering(K-Means, DBSCAN)
  - Reinforcement Learning(강화학습)



## 3. Data Mining

- 데이터의 특성간 상관관계
- 새로운 특성을 알아내기



# 2. Machine Learning의 시작

- 데이터를 학습해서 미지의 데이터에 대한 prediction(예측)

- Explicit Program으로 해결할 수 없는 문제를 해결하기 위해서 등장(1960년대)
  - Explicit Program : Rule based programing

- 경우의 수(조건)가 너무 많은 경우는  Rule based programing으로 할 수 없다
  - 스팸 필터링
    - 제목에서 블랙리스트('대출',...)를 적용
    - 이를 회피하기 위해 '대~출'이라는 제목으로 사용하면 스팸 처리가 안됨
    - 즉 블랙리스트가 끝없이 늘어난다
  - 바둑, 장기, 체스 등
    - 몇수 앞을 내다보는 연산을 구현하는게 쉽지 않다



# 3. Machine Learning의 4가지 학습방법

- 지도 학습(Supervised Learning)
- 비지도 학습(Unsupervised Learning)
- 준지도 학습(Semi-supervised Learning)
- 강화 학습(Reinforcement Learning)



## 1. 지도 학습(Supervised Learning)

> 우리가 해결하는 거의 대부분의 문제가 여기에 해당됨

- Training Data Set(학습 데이터셋)을 학습하며 미지의 데이터에 대한 예측을 하는 것

  - 입력값 : x
  - 정답(Lable) : t or y
    - 공부시간에 따른 시험점수 예측 : 연속적인 숫자값을 예측 - Regression
    - 공부시간에 따른 시험합격 여부 예측 : 어떤 종류의 값인지 예측 - Binary Classification(이진 분류)
    - 공부시간에 따른 성적분류(Grade) 예측 : 어떤 종류의 값인지 예측 - Multinomial Classification(다중 분류)

  - 주어진 Training Data Set을 이용해서 학습을 진행하여 예측 모델(수학식)을 생성
  - 생성된 예측 모델을 이용하여 새로운 입력값에 대한 예측을 진행



## 2. 비지도 학습(Unsupervised Learning)

- Training Data Set에 정답이 없는 경우
  - 뉴스와 같은 문자 데이터(비정형 데이터)
- 대표적인 경우는 Clustering



## 3. 준지도 학습(Semi-supervised Learning)

- 지도학습 + 비지도학습의 데이터가 혼재되어있는 경우