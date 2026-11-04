/*
Given a string s, return the longest palindromic substring in s.

Example 1:
  Input: s = "babad"
  Output: "bab"
  Explanation: "aba" is also a valid answer.

Example 2:
  Input: s = "cbbd"
  Output: "bb"

Constraints:

-> 1 <= s.length <= 1000
-> s consist of only digits and English letters.
*/

function longestPalindrome(s: string): string {
    let start = 0, end = 0;
    const exp = (l: number, r: number) => {
        while(l >= 0 && r < s.length && s[l] === s[r])l--, r++;
        return r - l - 1;
    }
    for(let i = 0; i < s.length; i++){
        const len1 = exp(i, i);
        const len2 = exp(i, i + 1);
        const len = Math.max(len1, len2)
        if(len > end - start){
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        };
    };
    return s.slice(start, end + 1);
};