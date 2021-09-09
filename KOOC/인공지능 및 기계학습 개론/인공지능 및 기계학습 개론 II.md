# [인공지능 및 기계학습 개론 II](https://kaist.edwith.org/machinelearning2__17#)

## Week 7

### Probability Concepts

- Probabilities
  - Relative frequency with which an outcome would be obtained if the process were repeated a large number of times under similar conditions
- Conditional Probability
  - P(A = true | B = true)
- Joint Probability
  - P(A = true, B = true)

### Probability Theorems

- Law of Total Probability
  - 'summing out' or marginalization 
  - P(a) = ΣP(a, b) = ΣP(a|b)P(b)

- Chain Rule or Factorization
  - P(a, b, c, ... z)=P(a|b, c, ... z)P(b|c, ... z)...P(z)
- Joint Probability Distribution

### Independence

- P(A, B)=P(A)P(B)
- Marginal Independence
  - X and Y are independent if and only P(X)=P(X|Y)
- Conditional Independence
  - P(A|B,C)=P(A|C)
  - A and B is conditionally independent 

### Interpretation of Bayesian Network

- Naive Bayes Classifier
- Bayesian Network
  - A graphical notation of
    - Random variables
    - Conditional independence
    - To obtain a compact representation of the full joint distributions
  - Syntax
    - A acyclie and directed graph
    - A set of nodes
      - A random variable
      - A conditional distribution given its parents
    - A set of links
      - Direct influence from the parent to the child
  - Topology of network encodes conditional independence assertions

### Bayes Ball Algorithm

- Typical Local Structures
  - Common parent
  - J < A > M
  - J ㅗ M|A
    - P(J,M|A)=P(J|A)P(M|A)
  - Cascading
    - B > A > M
    - B ㅗ M|A
      - P(M|B,A)=P(M|A)
  - V-Structure
    - ~(B ㅗ E|A)
    - B > A < E
      - P(B,E,A)=P(B)P(E)P(A|B,E)
- Purpose: checking Xa ㅗ Xb|Xc
  - shade all nodes in Xc
  - Place balls at each node in Xa
  - Let the vall rooling on the graph by Bayes ball rules
  - Then, ask wether there is any ball reaching Xb
    - Yes: Not independent
    - No: Independent
- Markov Blanket
  - A가 주어졌을때 다른 모든 변수와 conditional Independent 할 수 있는 Condition
  - P(A|balnk, b)=P(A|blanket)
  - Blanket={parents, children, children's other parents}
- D-Separation
  - X is d-separaterd (directly-separaterd) from Z given Y if we connot send a ball from any node in X to any node in Z

