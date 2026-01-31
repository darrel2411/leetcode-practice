class Solution {
    groupAnagrams(strs) {
        // const groups = new Map()

        // for (const s of strs) {
        //     // console.log(`this is original string --> ${s}`)
        //     const key = s.split("").sort().join("")
        //     // console.log(`this is key --> ${key}`)
        //     if (!groups.has(key)) {
        //         groups.set(key, [])
        //     }
        //     groups.get(key).push(s)
        // }

        // return Array.from(groups.values())

        /** another way to do O(m log n) */
        const groups = {};
        for (const s of strs) {
            const key = s.split('').sort().join('');
            (groups[key] ??= []).push(s); // ??= means only sets variable when current value is null or undefined
        }
        return Object.values(groups);
    }
}

const sol = new Solution()
const strs = ["act", "pots", "tops", "cat", "stop", "hat"] // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
const groupAnagrams = sol.groupAnagrams(strs)
console.log(groupAnagrams)


// const map = new Map()
// const objKey1 = { "a": 1, "b": 1 }
// const objKey2 = { "b": 1, "a": 1 }
// map.set(objKey1, ["act"])




// // get the value of a key in map
// console.log(map.get(objKey1))

/**
 * Given an array of strings strs, group all anagrams together into sublists. 
 * You may return the output in any order.
 * An anagram is a string that contains the exact same characters as another string, 
 * but the order of the characters can be different.

* example: 
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Input: strs = ["x"]
Output: [["x"]]
 */