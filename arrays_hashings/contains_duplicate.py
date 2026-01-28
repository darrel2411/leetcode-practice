from typing import List

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # one way to do it O(n)
        # hash_set = set()
        # for num in nums:
        #     if num in hash_set:
        #         return True
        #     hash_set.add(num)
        # return False
    
        # one way to do it O(n)
        return len(nums) != len(set(nums))
    
def main():
    solution = Solution()
    input = [1,2,3,4,1]

    check_duplicate = solution.hasDuplicate(input)
    print(check_duplicate)

if __name__ == "__main__":
    main()
