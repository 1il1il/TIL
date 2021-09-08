# [데이터 구조 및 분석: Linear Structure and Dynamic Programming](https://kaist.edwith.org/datastructure-2019s#)

## OT

- Data Structure and Algorithm
- Textbooks
  - Introduction to Algorithm by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein

## Week 1

- 구현
  - Programming
- 설계도
  - UML
    - DS, Algorithm
- Python
  - Interpreter
  - Object-oriented
  - Dynamic type of variables
  - Increasing usage
  - Unique code structure
  - Fast development speed, slow execution speed
  - Specialty in data analyses

- Equivalence
  - ==: Checks the equivalence of two referenced values
  - is: Checks the equivalence of two referenced objects' IDs

## Week 2

### object-oriented paradigm and software design

- Good Software Design
  - Correctness
  - Robustness
  - Flexibility
  - Usability and Reusability
  - Efficiency
- Object-Oriented Design
- Class vs. Instance
  - 설계도 vs. 실행 결과
- Unified Modeling Language (UML) 
- Encapsulation
- Inheritance
  - self: reference variable pointing the instance itself
  - super: reference variable pointing the base class instance

- Polymorphism

  - Method Overriding
  - Method Overloading

- Abstract Class

  - A class with an abstract method
  - abstract method: method with signature but with no implementation

- Overriding Methods in object

  - hidden methods

    - ```python
      __init__
      __del__
      __eq__
      __cmp__
      __add__
      ```

  - Duck Typing
    - Easier to Ask for Forgiveness the Permission(EAFP)

- Generalization

  - is-a relationship

- Association
  - has-a relationship

  - Multiplicity of Association
    - 1..*: 1 to Many
    - *: 0 to Many
    - 1: Exactly one
    - 0..1: One or zero

- Aggregation

  - Special has-a relationship
  - part-whole or part-of relationship

- Dependency

  - use relationship

## Week 3

### Abstract Data Types

- ADT is an abstraction of a data structure
- ADT specifies: 
  - Data stored
  - Operations on the data
  - Error conditions associated with operarions

### Array

- 동일한 data를 index를 활용하여 저장/접근
- Search procedure
  - 인덱스 하나씩 증가시키면서 찾기
- Insert procedure
  - 새로운 list 생성
  - 삽입지점 앞까지 기존 list 값을 새로운 list에 넣기
  - 새로운 값 삽입
  - 기존 값을 넣기
- Delete procedure
  - 새로운 list 생성
  - 삽입지점 앞까지 기존 list 값을 새로운 list에 넣기
  - 지울 값 제외하고 나머지 값을 새로운 list에 넣기
- Problems in Array
  - Have to perform line-wise retrievals

### Linked List

- nodes and references
  - A node consists of
    - A variable to hold a reference to its next node
    - A variable to hold a reference to its value object
  - Special nodes
    - Head and Tail
      - 값은 가지지 않고 처음과 끝만 의미
      - 없어도 상관없지만 있으면 편리함
- Search procedure
  - Array와 같지만 더이상 인덱스를 사용하지 못함
  - 다음 node의 정보를 받아서 이동
- Insert procedure
  - 새로운 노드 생성
  - 삽입되는 지점 이후의 노드 저장(Node next)
  - 삽입되는 지점 이전(Node prev)의 노드와 새 노드 연결
  - 새 노드와 저장한 노드(Node next) 연결 
- Delete procedure
  - 삭제할 노드 이전의 next를 삭제할 노드 이후로 변경

### Stack

- Structure of stack
  - A variation of a singly linked list
  - Only accesses to the first instance in the list (LIFO)
- Example: Balancing Symbols
  - openning symbol은 stack에 넣고 closing symbol을 만나면 pop을 하여 비교

### Queue

- Structure of queue
  - A variation of a singly linked list
  - Only accesses to the first and lastinstances in the list (FIFO)

## Week 4

### Recursions

- 재귀호출
- Repeating Problems
  - 유사한 형태의 좀더 작은 형태로 쪼개기
- Divide and Conquer
  - 문제를 잘게 쪼개서 해결해 나가기
- A programming method to handle the repeating items in a slef-similar way
  - Calling a function within the function
- Recursions and Stackframe
  - Stackframe is a stack storing your function call history
    - Push: When a function is invoked
    - Pop: When a fuction hits return or ends
- Merge sort
  - Decompose into two smaller lists
  - Aggregate to one larger and sorted list
- Problems in recursions
  - Excessive function calls
  - These are unnecessarily taking time and space
    - Dynamic Programming (한번 계산한건 저장하여 사용)

### Dynamic Programming

- Recursions with overlapping sub-instances
- Memoization
  - Key technique of dynamic Programming
    - Storing the results of previous funxtion calls to reuse the results again in the future
  - More philosophical sense
    - Bottom-up approach for problem-solving
      - Recursion: Top-down of divide and conquer
      - Dynamic programming: Bottom-up of storing and building
- Fibonacci Sequence in DP
  - Setting up a memoization table
- Process of Assembly Line Scheduling
  - min travel time
