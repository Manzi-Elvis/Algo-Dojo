/*
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:
-> 0 <= s.length <= 105
-> s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s: string): number {
      let seen = new Map();
      let left = 0;
      let maxLen = 0;
      for(let right = 0; right < s.length; right++){
            const ch = s[right];
            if(seen.has(ch) && seen.get(ch) >= left){
                  left = seen.get(ch) + 1;
            }
            seen.set(ch, right);
            maxLen = Math.max(maxLen, right - left + 1)
      }
      return maxLen;
};