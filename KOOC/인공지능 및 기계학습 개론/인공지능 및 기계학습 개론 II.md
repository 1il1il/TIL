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

### Factorization of Bayesian networks

- conditional Independent를 이용해서 간단하게 정리할 수 있다
- Plate Notation
  - X1...Xn을 간단하게 표현

### Inference Question on Bayesian network

- Likelihood
  - Xh = X - Xv
  - Xv = Σxh P(Xh, Xv)
- Conditiomal Probability
  - Xh = {Y, Z}
    - Y: interested hidden variables
    - Z: uninterested hidden variables
  - P(Y|xv) = Σz P(Y,Z=z|xv) = Σz P(Y,Z,xv)/P(xv) = Σz P(Y, Z, xv) / Σy,z P(Y=y, Z=z,xv)
- Most probable Assignment
  - Prediction
  - Diagnosis

### Marginalization and Elimination

- Marginalization 
  - P(a,b,mc)=ΣJC ΣE P(a,b,E,JC,mc)=ΣJC P(JC|a) ΣE P(a|b,E)P(E)
- Elimination
  - fJ (a)fM (a) = fJM (a)
  - ΣA fA (a,b,e)fJM (a) = ΣA fAJM (a,b,e)

### Potential Function and Clique Graph

- Potential Function
  - A function which is not a probability function yet, but once normalized it can be a probability distribution function
- Absorption in Clique Graph

### Simple Example of Belief Propagation
