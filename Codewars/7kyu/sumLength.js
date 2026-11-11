/*
Description:
Sum and Length
In this kata you must return a string value, where the first part is the sum of
positive numbers and the second part is the number of negative numbers.

Knowing that the first 0 is negative, the second is positive, the third is negative, and so on...

Examples
[-1,2,3,4,0,1,0,-2,0,-3]

==> '10 5'

sum of positives: 10 = 2 + 3 + 4 + 0 (second) + 1
count of negatives: 5 ( -1, 0 (first), -2, 0 (third), -3 )

Fundamentals
*/

function sumLength(arr) {
  let sum = 0;
  let count = 0;
  let zeroCount = 0;
  for(let num of arr){
    if(num > 0){
      sum += num;
    }
    else if (num < 0){
      count++;
    }
    else{
      zeroCount++;
      if(zeroCount % 2 === 1){
        count++;
      }
      else{
        sum += num
      }
    }
  }
  return `${sum} ${count}`;
}