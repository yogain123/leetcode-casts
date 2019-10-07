/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you Also solve it without converting the integer to a string?
 */

 /*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    x=x+"";
    let revx = reverseString(x);
    if(x===revx)
        return true;
    return false;
};

function reverseString(x){
    return x.split("").reverse().join("");
}