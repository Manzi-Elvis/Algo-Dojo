/*
Description:
It's 9 time!

I want to count from 1 to n. How many times will I use a '9'?

9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a positive integer.

Examples (input -> output)
8  -> 0
9  -> 1
10 -> 1
98 -> 18
100 -> 20
*/

// // return the number of 9's used to count out 1 to n
// function number9(n){
//   let count = 0;
//   for(let i = 0; i <= n; i++){
//     for(const dig of String(i)){
//       if(dig === "9"){
//         count++;
//       }
//     }
//   }
//   return count;
// }



function number9(n){
  let count = 0;
  for(let fact = 1; fact <= n; fact *= 10){
    const lower = n % fact;
    const curr = Math.floor(n / fact) % 10;
    const higher = Math.floor(n / (fact * 10));
    if(curr < 9){
      count += higher * fact;
    }
    else if(curr === 9){
      count += higher * fact + lower + 1;
    }
    else{
      count += (higher + 1) * fact;
    }
  }
  return count;
}