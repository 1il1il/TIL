# Dogs and Cats Classification(Binary Classification)

- Deep Learning은 데이터가 많아야 학습이 잘된다.
- 특이 입렵데이터가 고차원(Image)이면 더 많은 학습 데이터가 필요
  - 이는 현실적으로는 불가능
  - 일반적으로 데이터양이 작다

- 개와 고양이 예제의 전체 데이터는 2만 5천장 

- 이를 이용해서 accuracy를 계산
- 이 결과를 graph로 그려서 overfitting 여부 확인

- 다양한 방식으로 Data 전처리
  - 이미지 파일을 CSV 파일로 변환
    - Disk IO를 줄여서 상대적으로 학습이 빠르게 진행됨
    - 데이터 증식 기법을 이용하기가 힘들다
  - ImageDataGenerator
    - Disk IO때문에 속도가 느리다
  - TFRecord
    - Tensorflow 전용



## Dogs and Cats 예제

- 전체 데이터를 이용해서 학습
- 전체가 아닌 일부 데이터를 이용해서 학습
  - accuracy가 떨어진다(Overfitting이 심하게 발생한다)
- 이를 해결하기 위해 Data Augmentation(데이터 증식)
  - 근본적인 해결은 아니지만 과대적합을 피하는 하나의 방법
  - ImageDataGenerator를 이용하여 증식을 구현



### Accuracy 증가 방법

- hyper parameter를 조절
- pretrained network를 이용(사전훈련된 network)
  - 전이 학습



# Transfer Learning

- pretrained network를 이용하는 학습방식

- MNIST : 단순한 형태의 흑백 이미지

  - 학습해서 높은 정확도(99%)를 내기 위해서
  - 3개 이상의 Convolution Layer, 1개의 Pooling Layer, 1개의 FC Layer가 필요
  - GPU 없이 CPU만으로도 학습이 가능 > 1시간 이상 학습을 진행해야함

- 실무에서 사용하는 이미지는 MNIST처럼 단순한 이미지가 아닌 고해상도 컬러이미지가 대부분

  - 이러한 이미지를 학습할려면 최소한 5개 이상의 Convolution Layer, Pooling Layer, FC Layer안에 Hidden Layer도 1개 이상 필요

  - GPU없이 CPU로 처리하면 100시간을 쉽게 넘어간다, 학습에 오랜시간이 소요
  - 결과를 확인하고 hyper parameter를 조절하고 다시 학습?

- 이러한 문제를 해결하기 위한 방법이 pretrained network

  - 특정 데이터를 이용해서 CNN 학습이 완료된 network
    - ResNet(MS)
      - Convolution layer가 152층
    - Inception(google)
      - Convolution layer가 30층 이상
    - mobilenet
    - efficientnet - 학습속도 대비 높은 정확도
    - VGG16, 19 - 전통적인 모델
    - ...

  - Filter의 weight, DNN의 weight와 bias가 이미 학습이 된 모델
    - 여러 Training data set이 존재
      - 대표적으로 Imagenet

- CNN의 학습을 하지 않고(CNN의 특징 뽑는 알고리즘이 이미 완성된 모델을 사용하고) DNN 쪽만 우리의 이미지에 맞춰 학습시킴



## 특성추출방식

- pretrained network를 이용해서 우리 데이터의 activation map을 구하고 
- 이를 우리의 Classifier인 FC Layer의 입력으로 사용하여 Weight와 Bias를 갱신함

