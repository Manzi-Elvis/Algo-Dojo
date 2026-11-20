/*
Write a function that takes an array that may have other arrays nested indefinitely within,
and reverses that array and every array within.

Example:
Regular reverse shown only for comparison, do not write a regular reverse function.

original array         regular reverse        deep reverse
───────────────────────────────────────────────────────────────────────────────────

[[1,2],[3,4]]          [[3,4],[1,2]]          [[4,3],[2,1]]

[[9,8,7],[6,5,4],[3,2,1]]
                       [[3,2,1],[6,5,4],[9,8,7]]
                                              [[1,2,3],[4,5,6],[7,8,9]]

[[50,51,[52,53]],[[54,55],56,57]]
                       [[[54,55],56,57],[50,51,[52,53]]]
                                              [[57,56,[55,54]],[[53,52],51,50]]
*/
const deepReverse = (l) => l.reverse().map(i => Array.isArray(i) ? deepReverse(i) : i)