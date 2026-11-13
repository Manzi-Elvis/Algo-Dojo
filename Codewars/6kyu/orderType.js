/*
Write a function that takes a single array as an argument (containing
multiple strings and/or positive numbers and/or arrays), and returns
one of four possible string values, depending on the ordering of the
lengths of the elements in the input array:

Your function should return...

- “Increasing” - if the lengths of the elements increase from left to right
  (although it is possible that some neighbouring elements may also be equal in length)

- “Decreasing” - if the lengths of the elements decrease from left to right
  (although it is possible that some neighbouring elements may also be equal in length)

- “Unsorted” - if the lengths of the elements fluctuate from left to right

- “Constant” - if all element's lengths are the same.

Numbers and Strings should be evaluated based on the number of characters or
digits used to write them.

Arrays should be evaluated based on the number of elements counted directly
in the parent array (but not the number of elements contained in any sub-arrays).
*/

function orderType(arr) {
  if(arr.length <= 1) return "Constant"
  const len = arr.map((item) => {
    if(typeof item === "number") return String(item).length;
    return item.length;
  })
  const isConst = len.every((l, i) => i === 0 || l === len[i - 1]);
  const isInc = len.every((l, i) => i === 0 || l >= len[i - 1]);
  const isDec = len.every((l, i) => i === 0 || l <= len[i - 1]);
  
  if(isConst) return "Constant";
  if(isInc) return "Increasing";
  if(isDec) return "Decreasing";
  return "Unsorted"
}