# [ 인공지능 및 기계학습 개론 II](https://kaist.edwith.org/machinelearning2__17#)

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

## Week 8

### K-Means Algorithm

- Unsupervised Learning

  - You don't know the true value, and you cannnot provide examples of the ture value. 
  - Case, such as
    - Discovering clusters
    - Discovering latnet factors
    - Discovering  graph structures

- K-Means Algorithm

  - K개 중심 설정, 거리를 측정해 클러스터 설정
  - Expectation
  
    - Expectation of the log-likelihood given the parameters
    - Assign the data points to the nearest centroid
  - Properties of K-Means Algorithm

    -  number of clusters is uncertain
    - Initial location of centroids
    - Limitation of distance metrics
  - Hard clustering
    - Hard assignment of data points to clusters

### Multinomial Distribution

- A generalization of binomial distribution
  - Given dataset D with N selections, x1...xn
- Lagrange Method
  - Method of finding a local maximum subject to constraints

### Multivariate Gaussian Distribution

- covariance matrix
- Mixture Model

### Gaussian Mixture Model

- Log likelihood of the entire dataset

### EM(Expectation-Maximization) step for Gaussian Mixture Model

- Expectation of GMM
  - Expectation: the assignment between the clusters and the data points
  - Maximization: the update of the parameters
- Expectation step
  - Assign a data point to a nearest cluster > the assignment probability
- Maximization of GMM

### Relation between K-means and GMM

### Fundamentals of the EM Algorithm

- Difference between classification and clustering
- Probability Decomposition
  - Jensen's Inequality

### Derivation of EM Algorithm

- Maximizing the Lower Bound
- Kullback-Leiberdivergence or KL divergence
  - 임의의 두 분포간의 차이를 알아보는 방법
  - KL(P||Q) =/= KL(Q||P)
- EM Algorithm
  - Finds the maximum likelihood soultions for models with latent variables
  - P(X|θ) = Σz P(X,Z|θ) > ln P(X|θ) = ln {Σz P(X,Z|θ)}
  - Initialize θ0 to an arbitrary point
  - Loop untill the likelihood converges
    - Expectation step
    - Maximization step
  - GMM, K-Means
    - We need EM algorithm to find the assignment if latene variables and the related distribution parameters

## Week 9

### Concept of Hidden Markov Model

- Observation, x
  - Can be either discrete or continuous
  - x1...xT: Observation from time 1 to T
- Latent stat, z
  - Vetor variable with K elements
  - Can be either discrete or continuous
    - If continuous > Kalman filter

- Hidden Markov Model (HMM)
  - P(z1) ~ Mult(π1,...,πk)
  - Transition probabilities
    - 지금 시각엔 클러스터에 있는데 다음 시각에 어떤 클러스터에 있을지
    - 첫 클러스터에서 두번째로 갈 확률은? 이동하지 않을 확률은?
  - Emission probabilities
    - i번째 클러스터(latent)에 있을때 x(observation)는 어떤 것일까?
  - A stochastic generative model

### Joint and Marginal Probability of HMM

- Main questions
  - Evaluation question
    - Given π, a, b, X
    - Find P(X|M, π, a, b)
    - How much is X likely to be observed in the trained model?
  - Decoding question
    - Given π, a, b, X
    - Find argmax z P(Z|X, M, π, a, b)
    - What would be the most probable sequences of latent states?
  - Learning question
    - Given X
    - Find argmax π, a, b P(X|M, π, a, b)
    - What would be the underlying parameters of the HMM given the observations?
  - Decoding questions and Learning questions are very similar to
    - Supervised and Unsupervised learning
- Marginal Probability
  - Eventually, we only want to use X and marginalize Z
  - Need to avoid a repetitive computing

### Forward-Backward probability Calculation

- Forward probability 
  - Time 1 > Time T
  - Limitation
    - Only takes the input sequence of X before time t
    - Need to see a probability distribution of a latent variable at time t given the whole X
- Backward probability

### Viterbi Decoding Algorithm

- Technical difficulties in the implematation
  - Very frequent underflow problems
  - Trun this into the log domain > from multiplication to summation

### Baum-Welch Algorithm

- Learning Parameters with Only X
- Strategy
  - Finding the optimized π, a, b with X
  - Finding the most probable Z with X, π, a, b
  - How to find the unknown parameter of the latent distribution without supervision?
  - **EM algorithm**
    - Iteratively optimiziong π, a, b and Z
- EM for HMM
  - Initialize π, a, b to an arbitrary point
  - Loop until the likelihood converges
- Assign Z and optimize π, a, b alternatively
  - Coordinated optimization

## Week 10

### Forward Sampling

- Generate a sample from the Bayesian network
  - Create such sample many times
  - Then count the samplesmatch the case
    - P(E=T|MC=T)
- Forward Sampling in GMM
  - Sample z from π
    - z is the indicator of the mixture distributuon
  - With selected z, sample x from N(μz, Σz)

### Rejection Sampling

- P(E=T|MC=T,A=F)=?
- Iterate many times
  - Generate a sample from the Bayesian network
    - If the sample does not follow MC=T, A=F, reject the sampling procedure and repeat
- Rejection Sampling frm Numerical View
  - Distribution that is easy to sample Should be an envelope of p(x) by adjusting M

### Importance Sampling

- Huge waste from the rejection
- Is generating the PDF the end goal?
  - NO. Usually, the question follows
    - Calculating the expectation of PDF
    - Calculating  a certain probability
- Let's use the wasted sample to answer the questions
- Likelihood Weighting Algorithm
  - P(E=T|MC=T,A=F)=?
  - LikelihoodWeighting
    - SumSW=NormSW=0
      - Iterate many times
        - SW=SampleWeight=1
        - Generate a sample from the Bayesian network
          - P(A=F|B=F,E=F)=0.999
          - SW=1*0.999
          - P(MC=T|A=F)=0.01
          - SW=1x0.999x0.01
        - If the sample has E=T, then SumSW+=SW
        - NormSW+=SW
      - Return SumSW / NormSW

