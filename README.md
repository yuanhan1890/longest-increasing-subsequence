Longest increasing subsequence
===

> the longest increasing subsequence problem is to find a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible.  [from wiki]((https://en.wikipedia.org/wiki/Longest_increasing_subsequence))

## three solutions

### solution from wiki

[source](https://en.wikipedia.org/wiki/Longest_increasing_subsequence)

### using patience sorting

[source](https://www.cs.princeton.edu/courses/archive/spring13/cos423/lectures/LongestIncreasingSubsequence.pdf)

### dumb solution

```js
findAllSubseq(arr)
filterNonIncreasing(arrs)
findLongestSub(arrs)
```

check folder [dumb_solution](https://github.com/yuanhan1890/longest-increasing-subsequence/tree/master/dumb_solution) for more details

## install

`npm install`

## test

`npm run test`