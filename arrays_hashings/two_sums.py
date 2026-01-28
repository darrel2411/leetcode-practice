from typing import List
class Solution:
    def two_sums(self, nums: List[int], target: int) -> List[int]:
        theMap = {}
        for idx, val in enumerate(nums):
            difference = target - val
            if difference in theMap:
                return [theMap[difference], idx]
            
            theMap[val] = idx

        # return

def main():
    solution = Solution()
    nums = [3,4,5,6]
    target = 7
    two_sums = solution.two_sums(nums, target)
    print(two_sums)

if __name__ == "__main__": 
    main()