class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /** O(n) time complexity */
        // let obj_s = {}
        // let obj_t = {}

        // if(s.length !== t.length) return false
        
        // for (let i = 0; i < s.length; i++) {
        //     if(!obj_s[s[i]]) {
        //         obj_s[s[i]] = 1
        //     } else {
        //         obj_s[s[i]]++
        //     }
        // }

        // for (let i = 0; i < t.length; i++) {
        //     if(!obj_t[t[i]]) {
        //         obj_t[t[i]] = 1
        //     } else {
        //         obj_t[t[i]]++
        //     }
        // }

        // for (const el in obj_s) {
        //     if(obj_s[el] !== obj_t[el]) return false
        // }

        // return true

        /** another way to do it ?? */
        // doing it by adding and automatically substract. finally check if any key is more than zero (0) return false
        if (s.length !== t.length) return false;
        const count = {};
        for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
            count[t[i]] = (count[t[i]] || 0) - 1;
        }
        for (const k in count) if (count[k] !== 0) return false;
        return true;
    }
}

const solution = new Solution()
// const s = "racecar", t = "carrace" // example 1
const s = "jam", t = "jar" // example 2
const isAnagram = solution.isAnagram(s, t)
console.log(isAnagram)

/** task to-do */
/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false
*/

/**
 * notes:
 * in JS, cannot directly compare contents of 2 Objects directly using "==="
 * Because it only check the reference memory
 */