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

## Week 2

### Difficult Problem

- What makes a problem difficult?
  - Difficulty in implementing an algorithm?
  - Difficulty in understanding an algorithm?
  - Difficulty in calculating a solution in a given time, or your lifetime
- Search space and global optimum
  - Optimization is tightly linked to space search
    - Data structure is a safe path with a consistency keeping the assumptions
  - What-if there is no paths, just a big list sizing N
    - Searching a record by a record must not be feasible
    - The list is not structured woth a pattern
      - No deterministie ways to search the space

### Genetic Algorithm

- Heuristic based Optimization Techniques
  - Hill-climbing heuristics or gradient-ascent heuristics
- Genetic Algorithm
  - Genotype is the identify of an entity
    - Genotypeof an individual: ...ATCGATC...
    - Genotypeof an loacation: (10.7, 12.3)
  - Phenotype is the observation on an entity
    - Phenotype of an individual: the look of his face
    - Phenotype of an loacation: the altitude of the location
  - Fittest phenotype > Optimal value
  - Driving genotype > Optimal solution
  - Phenotype을 최적화하기 위한 Genotype 을 찾아내기

### Traveling Salesman Problem

- Genotype: 방문할 도시 순서의 리스트
  - O(N!)
- Phenotype: Travel money
- Terminology
  - A problem to solve: A problem tha is converted and solved by GA
  - Gene: A factor of a solution
  - Genptype: A solution
  - Encoding: Representation method on a solution
  - Phenotype: Quality of a solution
  - Population: A set of solutions
  - Initialization: Producing the initial set of solutions
  - Selection: Selecting a prominent sub set of solutions
  - Offspring production: Producing a derived solutions from the selected sub-set
  - Enviroment: The measurement for the evaluation of a solution

### Structure of Genetic Algorithm

### Encoding

- Encoding step
  - How to represent a solution as a vector of genes
    - Traveling 3 cities: Total 3! case
    - Ex. (Seoul, Kwangju, Daejeon)
  - Trhree possible encoding strategies
    - Convenience of the representation
      - K-ary coding
      - (0, 1, 2) when 3-ary coding > 012
    - Convenience of the future operations
      - binary coding
      - (00, 01, 10) when binary coding > 000110
    - Adaptation to the problem at hand
      - Position based coding (0=Seoul, 1=Kwangju, 2=Daejeon)
        - 첫번째는 서울에서의 목적지, 두번째는 광주에서의 목적지...
        - 유효하지 않은 해를 찾을 수 있다
      - (1,2,0) when position baesd coding > 120
        - 서울에서 광주로, 광주에서 대전으로, 대전에서 서울로

### Selection

- Selection is the most delicate part of the GA
  - Natural selection
  - Selection is based upon the firness
  - To obtain a global optimum
    - Accept the inferior population
  - Hence, the selevtion is not just dropping the inferior solutions
    - Delicately balance
      - the bigger portion of good solutions
      - the smaller portion of bad solutions
- Selection step: roulette wheel based
  - Selection by proportion
    - fi = (Cw - Ci) + (Cw - Cb)/(k - 1), k > 1
      - i번째 solution의 fitness
      - Cw: travel cost of the worst solution in the population
      - Ci: travel cost of the examined solution in the population
      - Cb: travel cost of the best solution in the population
    - k가 커지면 worst case가 선택될 확률이 줄어든다
  - Fitness-based proportional survival od population

### Crossover

- Through the selection step, we find two solutions to be the parent of a new solution
  - The new solution is generated by mixing up the genes of the two solutions
  - Mixing up == Crossover
  - The best case scenario
    - The new solution takes the best part from the two solutions
  - The worst case scenario
    - The new solution takes the worstpart from the two solutions
  - Hence, we need a good crossover
- Crossover step: Multi-point crossover
  - One-point crossover
    - Select a position over a genotype
    - Choose the parts alternatively
  - Multi-point crossover
    - Select multiple position to crossover
    - Choose the parts alternatively
  - The inconsistency problem
    - Might not produce a valid solution
    - Two styles: produce and repair; or careful crossover

### Mutation

- Problem of hill-chimbing
  - Equal to problem of Nazi
  - Strong driving force in pursuing a goal
  - However, dose not see a long-term evolution
    - Hence, they eliminate the diversity of population
    - No starting points for the new ways to imporve
  - In GA, What-if we eliminate the diversity of the population through the selection and the crossover step?
  - Therefore, you need a **mutation**
- Simple mutations
  - Random mutations
    - If numeric variables
      - Assume a distribution
      - Draw a new number from the distribution
    - If categorical variables
      - Assume a distribution and draw a category
      - But, don't diverge from the set of the categorical values
  - Swap mutaions
- Remember that this is the last step before solutions are inserted into the population

### Substitution and Execution

- Substitution step
  -  N = the size of population, or the number of solutions in our hands
  - K = the size of offspring, or the number of new solutions
  - We need to create a feedback system to utilize the nwe solutions in the iteration process
    - How much feedback are we going to provide?
      - K/N = geneation gap
      - K/N > 1
        - Replacing the most of population
        - Called generational GA
        - Dynamic, but slow
      - K/N > 1/N
        - Replace just one solution of the population
        - Called steady-state GA
        - Steady, but fast
  - Who to replace
    - Inferior solutions? > Replacing the bottom K solutions with the new ones
      - Fast coverence
    - Parent? > Replacing the worse parent solution with the new one
      - Bigger diversity

## Week 3

### O(N^2) Sorting

- Sorting algorithm
  - Worst case O(N^2) Sorting
  - Without a divide-and-conquer approach
  - Sequential comparisons with two index iterations
    - Usually there is a nested loop that ranges
  - Variants
    - Insertion Sort
    - Selection Sort
    - Bubble Sort
  - Pros and Cons
    - Cons: time complexity
    - Pros: Easy to implement
- Selection sort algorithm
  - For itr1=0 to length(list)
    - For itr2=itr1+1 to lenght(list)
      - If list[itr1] < list[itr2]
        - Swap list[itr1], list[itr2]
- This program uses
  - Data structure: List
  - Algorithm: Selection sort

### Merge Sort

- O(NlogN) Sorting
  - With a divide-and-conquer approach
  - Divide the target sequence into multiple sequences
    - Recursively perform sorting of the sub-sequences
    - Problem is **How to divide**
  - Variant
    - Quick sort
    - Heap sort
    - Merge sort
  - Pros and Cons
    - Cons: bad division leads into O(N^2) time complesity
    - Pros: relatively good time complexity
- Merge Sort
  - Decompose into two smaller lists
  - Aggregate to one larger and sorted list

### Heap Sort

- Priority queue
  - Repeated, dequeue with the highest priority
  - = dequeue the maximum value
  - Well-utilizable for sorting
  - Particularly
    - Binary heap enables the dequeueing with O(longN)
    - For dequeueing all elements, it takes O(NlogN)
      - same to the sorting all of element
  - How to perform a sorting with a heap (=heap sort)
    - Given a list whose index ranges from 0 to N
    - Firstly, Build the binary heap through insertions = O(NlogN)
      - N items to insert
      - Percolations takes maximum logN
        - Is it true? Any better way?
    - Secondly, take out one element at a tim = O(logN)
      - For itr in range(0, N):
        - Sorrted[itr] = Heap.getHighestPriority()

### Quick Sort

- QuickSort(Sequence)
  - Given a sequence
  - Select a pivot
    - Pivot = a threshold to divide the sequence into two sub-sequences
  - Divide the sequence into two sub-sequences
    - Sequence with values less than the pivot
    - Sequence with values greater than the pivot
  - Return
    - QuickSort(Sequence with less) + Pivot + QuickSort(Sequence with greater)
- Merge dort forces to divide the sequence inthe middle
  - Always the similar size of the sub-sequence
- This divides the sequence with the pivot selection
- Importance of pivot in quick sort
  - What-if the pivot is biased
    - Pivot is always the smallest number
      - Then just another selection sort
  - Pivot selection approach
    - Median
    - Random

### Counting Sort

- O(N) sorting
  - Average case O(N) sorting
  - Not comparison-based approach
    - the best performance of the comparison based approach is O(NlogN)
    - Therefore, should not be based upon comparisons
  - Rather based upon counting and numeric properties(Assumption)
  - Variants
    - Radix sort
    - Count sort
  - Pros and Cons
    - Cons: assumptions and not comparison-based
    - Pros: best time complexity
- Counting Sort
- Assumption
  - The sequence contains integers ranging from 0 to K
- Count the occurrence and produce a sequence based upon the counts
- Basic idea
  - For itr from 0 to N
    - Value = sequence[itr]
    - Count[Value] = Count[Value] + 1
  - For itr1 from 0 to K
    - For itr2 from to Count[itr1]
      - Print itr1
  - Time complexity
    - O(N + R)
      - R - the range of the sequence values
      - N = The size of the sequence

### Radix Sort

- Assumption
  - The sequence contains integers
- Sort from the least important digit to the most important digit
  - Sort from 1000**2** to **1**0002
- Basic idea
  - For itr1 from 0 to D
    - Prepare a bucket list ranging from 0 to 9
    - For itr2 from 0 to N
      - digit = itr|th digit of seq[itr2]
      - Place a seq[itr2] in bucket[digit]
    - cnt = 0
    - For itr2 from 0 to 9
      - For itr3 from bucket[itr2]
        - seq[cnt] = bucket[itr2]\[itr3]
        - cnt = cnt + 1
- Time complexity
  - O(ND)
  - D = the digit number of the largest value
  - N = the size of the sequence

