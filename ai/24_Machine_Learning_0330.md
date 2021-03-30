# 전이 학습(Transfer Learning)

## 특성추출(Feature Extraction)

- pretrained network를 이용해서 우리 이미지에 대한 feature map을 추출
- 이를 FC Layer에 입력으로 넣어서 모델 학습
- pretrained network의 parameter를 동결하여 학습을 진행하지 않음
- 상대적으로 속도가 빠르다



## 미세조정(Fine Tuning)

- pretrained network의 일부 parameter를 모두 동결시키지 않고 몇개의 convolution layer을 동결 해제해서 학습을 진행
- FC Layer와 가까이 있는 상위 Layer 몇개만 동결 해제

- Fine Tuning의 절차
  - pretrained network위에 새로운 network추가 (ex. FC Layer)
  - pretrained network을 동결
  - 새로운 network을 학습시킴
  - pretrained network의 일부분 layer를 동결에서 해제
  - 동결을 해제한 layer와 새로운 network를 다시 학습시킴