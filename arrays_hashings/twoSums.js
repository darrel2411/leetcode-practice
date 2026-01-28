class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /** Brute force. O(n^2) */
        // for (let i = 0; i < nums.length; i++) {
        //     for(let j = 0; j < nums.length; j++){
        //         if(i !== j) {
        //             if((nums[i] + nums[j] == target)){
        //                 return [i,j]
        //             }
        //         }
        //     }
        // }
        // return []

        /** time complexity O(n) */
        let map = {}; // the format will be --> value: index
        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i]
            if (difference in map) {
                return [map[difference], i]
            } else {
                map[nums[i]] = i
            }
        }
    }
}

const solution = new Solution();
// const nums = [3, 4, 5, 6], target = 7; // output [0,1]
const nums = [4, 5, 6], target = 10; // output [0,2]

const twoSums = solution.twoSum(nums, target);
console.log(twoSums);

const myMap = new Map();

// Set key-value pairs
myMap.set("apple", 1);
myMap.set("banana", 2);

/**
 * TWO SUM
 *
 * Given an array of integers nums and an integer target,
 * return the indices i and j such that nums[i] + nums[j] == target and i != j.
 * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * Return the answer with the smaller index first.
 *
 * Input: nums = [3,4,5,6], target = 7
 * Output: [0,1]
 */
