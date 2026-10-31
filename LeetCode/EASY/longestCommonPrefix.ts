/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:
-> 1 <= strs.length <= 200
-> 0 <= strs[i].length <= 200
-> strs[i] consists of only lowercase English letters if it is non-empty.
*/

function longestCommonPrefix(strs: string[]): string {
    if(!strs || strs.length === 0) return "";
    const base = strs.reduce((a, b) => a.length <= b.length ? a : b);
    for(let i = 0; i < base.length; i++){
        const ch = base[i];
        for(let s of strs){
            if(s[i] !== ch){
                return base.slice(0, i);
            }
        }
    }
    return base;
};