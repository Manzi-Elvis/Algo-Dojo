/*
Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment or decrement an element of the array by 1.

Test cases are designed so that the answer will fit in a 32-bit integer.

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
Example 2:

Input: nums = [1,10,2,9]
Output: 16
 

Constraints:

n == nums.length
1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
*/

function minMoves2(nums: number[]): number {
    const n: number = nums.length;
    nums = nums.sort((a, b) => a - b);
    const median: number = nums[Math.floor(n / 2)];
    let moves = 0;
    for(let i in [...nums]){
      moves += Math.abs(nums[i] - median)
    }
    return moves
};