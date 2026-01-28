from typing import List

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dict_s = {}
        dict_t = {}

        if len(s) != len(t): 
            return False

        for char in s:
            if char not in dict_s:
                dict_s[char] = 1
            else:
                dict_s[char] += 1

        for char in t:
            if char not in dict_t:
                dict_t[char] = 1
            else:
                dict_t[char] += 1
        
        # in python, can directly compare contents of 2 object/dicitionary 
        return dict_s == dict_t
    
def main():
    solution = Solution()
    # s = "racecar"
    # t = "arccaer"
    s = "jar"
    t = "jam"

    check_duplicate = solution.isAnagram(s, t)
    print(check_duplicate)

if __name__ == "__main__":
    main()
