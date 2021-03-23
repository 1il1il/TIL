# CNN

![image-20210323093908097](C:%5CUsers%5CLiO%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210323093908097.png)

- 데이터 흐름
  - input data > `conv` > feature map > `relu` > activation map > `pooling` > 축소된 data

- 이미지의 특징을 추출 (feature extraction)
  - filter를 사용하여 이미지 특징을 추출, pooling을 통해 이 특징을 강화하고 크기를 줄임
- 학습후 분류
  - 특징을 뽑아낸 데이터를 Flatten > softmax를 이용해서 분류
- CNN의 특징
  - filter를 학습해
  - DNN과 비교했을 때 parameter의 수가 20%30% 수준



# Pooling Layer

- kernel size,  stride의 크기에 따라 출력되는 feature map의 크기가 줄어든다
- 하지만 filter를 여러개 사용하기 때문에 전체적인 데이터양은 상당히 커진다
- 이러한 데이터양을 줄이기 위해 사용하는 기법(Layer)



# Fashion-MNIST

- 숫자가 아닌 의류 그림을 이용한 이미지 데이터 셋

