# [데이터 구조 및 분석: Non-Linear Structure, Optimization, and Algorithms](https://kaist.edwith.org/datastructure-2019s2?referer=https%3A%2F%2Fwww.boostcourse.org%2Fneoid%2FdoChainingLogin#)

## Week 1

### Priority Queue and Heap

- Using the linked list as the basis of the priority queue
  - Stroe the element as well as the priority
  - Then, two approaches to implement
    - Lazy approach == Unsorted implementaion
      - 입력할때 이전과 동일하게
      - 출력할때 우선순위 찾아서 높은거 제거
    - Early-brid approach
      - 입력할때 우선순위 고려하여 입력
      - 출력할때 이전과 동일하게

### Balanced Tree

- If its size is n,
  - n <= 2^h+1 - 1
  - 6 nodes in a tree of height 2
    - 6 <= 7
  - 6 nodes in a tree of height 5
    - 6 <= 63
- What if
  - 2^h - 1 < n <= 2^h+1 - 1
  - 6 nodes in a tree of height 2
    - Correct: 3 < 6 <= 7
  - 6 nodes in a tree of height 5
    - Incorrect: 31 < 6 <= 63

### Binary Heap for Priority Queue

- Binary heap is a binary tree with two properties
  - The shape property
    - The tree is a complete tree
  - The heap property
    - Each node is greater than or equal to each of its children
    - Max-heap since we defined a higher priority has a higher value

### Reference Structure of Binary Heap

### Insert Operation of Binary Heap

- Percolate-up
  - Starting from a leaf
  - Approaching toword a root
    - Insert a value at the next node to insert
    - Compare the value to the value of the inserted node's
    - IF the value is bigger than the parent's
      - The heap property is broken
      - Exchange the two values
      - Pepeat this comparison at the parent's node

### Delete Operation of Binary Heap

- Percolate-down or cascade-down
  - Starting from a root
  - Approaching toward a leaf
    - Delete the root node value by replacing the node with last node
    - Compare the value to the value of the inserted node's children
    - If the children's value is bigger than the parent's, (pick a bigger child)
      - The heap property is broken
      - Exchange the root value and the bigger value from children
      - Repeat this comparison at the exchanged child's node

### Complexity of Priority Queue and Heap Sort
