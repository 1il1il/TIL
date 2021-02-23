# Regression Learning

## 고전적 선형 회귀 모델

- y = Wx + b ( 변수가 1개인 경우)
- 실제값 t (데이터의 값)
- 가설에 의해 계산된 값 y (모델에 데이터를 넣어 계산된 값)

## Learning

- 초기의 W, b값은 랜덤으로 시작
- 주어진 데이터를 가장 잘 표현하는 W, b값을 찾아가는 과정
- 오차 ( error) = t - y = t - (Wx + b)
- 오차가 최소화되는 모델을 찾기위해 error를 제곱하여 평균을 구한다
  - 평균 제곱 오차(MSE)

- loss function(손실함수)
  - t와 y의 차이(error)를 모두 더해 수식으로 나타낸 식
  - 최소 제곱법을 이용해서 loss function을 만들고 이 함수가 최소가 되는 W와 b를 찾는 것
- loss function의 값이 최소가 되게하는 W와 b를 찾기위해 경사 하강법 사용



## Gradient Descent (경사 하강법)

- 최소의 값을 찾기 위한 알고리즘
- 함수의 미분값에 -a를 곱해 최소를 찾아가는 방식
  - 현재 위치에서 기울기가 +이면 뒤로가야 하므로 `+ x - = -`
  - 현재 위치에서 기울기가 -이면 앞으로가야 하므로 `- x - = +`
- 이때 미분한 값에 곱해지는 a는 learning rate
- learning rate는 정해져있지 않고 우리가 최적의 값을 찾아야 함



# Tensorflow

- open source library
- numerical computation(수치연산)
- data flow graph
  - Node와 Edge로 구성된 방향성있는 Graph
  - Node : 수치연산, 데이터 입출력 담당
  - Edge : 데이터를 주고 받는 역할, 단방향 이동만 가능(방향이 정해져 있다)
  - data : 동적크기의 다차원 배열 , Tensor
- 그래프를 만들어서 실행
- 먼저 그래프를 그리고 그래프를 실행(노드를 실행)하는 구조