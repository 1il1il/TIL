# 학습에 필요한 데이터의 양

- Deep Learning은 데이터가 많아야 학습이 잘되고 accuracy도 높게 나올 수 있다

  - 현실적으로는 적은 양의 데이터로 학습 및 예측해야 하는 경우가 대부분

  - 만약 데이터 정제가 잘 되어있다면(비교적 간단한 학습인 경우) 적은 양의 데이터로도 학습이 가능

- 일반적으로 데이터양이 작다라고 이야기 하는 것은 10만개 이하인 경우



# Dogs vs Cats

## 원초적 방법

- 사진 파일을 읽어와 RGB Pixel값으로 decording(3차원) > 흑백으로 변환 (1차원)
- 이미지의 사이즈도 동일하게 처리



## ImageDataGenerator

- I/O Latency가 있다

```python
train_datagen = ImageDataGenerator(rescale=1/255)

train_generator = train_datagen.flow_from_directory(
    train_dir,
    classes=['cats', 'dogs'],
    target_size=(150,150),
    batch_size=20,     
    class_mode='binary'
)
```

- target directory
- classes 속성을 생략하면 폴더 순서대로 label이 결정, 순서대로 0,1,2...
- target_size : 일반적으로 정방향으로 resize, CNN구조에 따라 이 값은 달라진다
- batch_size : 한번에 20개 이미지 가져와서 변환, label에 상관 없이 가져온다

- class_mode : 목적에 따라 알맞게 설정, 다중분류면 categorical(default)



```python
history = model.fit(
    train_generator, 
    steps_per_epoch=100, 
    epochs=50, 
    validation_data=validation_generator,
    validation_steps=50)
```

- train_generator : train data
- steps_per_epoch : 1 epoch이 되기위해 train_generator  얼마나 이미지를 만들어야 하는가
- epochs : 반복횟수
- validation_data=validation_generator : validation_data를  validation_generator를 통해 가져옴
- validation_steps : steps_per_epoch과 마찬가지로 1 epoch이 되기위해 얼마나 이미지를 만들어야 하는가
  - 이때 steps_per_epoch , validation_steps은 전체 이미지의 수를 고려하여 설정하여야 한다



## TFRecord

- Tensorflow의 기본 자료구조
- 코드가 어렵다



# Data Augmentation

- computer vision에서 이미지를 다룰때 일반적으로 사용하는 과대적합 감소방법
- 기존 데이터에 약간의 변형을 주어 데이터를 추가적으로 만들어내는 기법

```python
ImageDataGenerator(
    rotation_range=20, 
    width_shift_range=0.1,
    height_shift_range=0.1,
    zoom_range=0.1,
    horizontal_flip=True,
    vertical_flip=True
)
```

- rotation_range : 지정된 각도 범위 내에서 임의로 원본 이미지를 회전

- width_shift_range : 지정된 범위 내에서 임의로 원본 이미지를 가로 방향으로 이동

- height_shift_range : 지정된 범위 내에서 임의로 원본 이미지를 세로 방향으로 이동

- zoom_range : 지정된 범위 내에서 임의로 원본 이미지를 확대하거나 축소

- horizontal_flip : 수평방향으로 이미지 반전

- vertical_flip : 수직방향으로 이미지 반전