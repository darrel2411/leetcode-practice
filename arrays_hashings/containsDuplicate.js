class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // // brute force O(n^2)
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = 0; j < nums.length; j++) {
        //         if (j !== i) {
        //             if (nums[i] === nums[j])
        //                 return true
        //         }
        //     }
        //     const element = array[i];
        // }
        // return false

        // O(n)
        // one way to do it
        // let theMap = {}
        // for (let i = 0; i < nums.length; i++) {
        //     if (!theMap[nums[i]]) {
        //         theMap[nums[i]] = 1
        //     } else {
        //         theMap[nums[i]] += 1
        //     }
        // }

        // for (const key in theMap) {
        //     if (theMap[key] > 1) {
        //         return true
        //     }
        // }
        // return false

        // another way
        let theMap = {}
        for (let i = 0; i < nums.length; i++) {
            if (!theMap[nums[i]]) {
                theMap[nums[i]] = 1
            } else {
                return true
            }
        }
        return false
    }
}


// const solution = new Solution()
// // const checkDuplicate = solution.hasDuplicate([1, 2, 3, 4, 5, 1, 2, 1])
// const checkDuplicate = solution.hasDuplicate([1, 2, 3, 4, 5])
// console.log(checkDuplicate)

// const set = new Set()

// set.add(1)
// set.add(2)
// console.log(set)