# -*- codeing = utf-8 -*-
# @Time : 2023-8-28 20:24
# @Author : 刘永奇
# @File : 15. 三数之和.py
# @Software : PyCharm
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) < 3: return []
        nums.sort()
        res = []
        l = len(nums)
        for i in range(l):
            if nums[i] > 0:
                return res
            if (i>0 and nums[i]==nums[i-1]):
                continue
            L = i+1
            R = l-1
            while L < R:
                if (nums[i] + nums[L] + nums[R] == 0):
                    res.append([nums[i],nums[L],nums[R]])
                    while L < R and nums[L]==nums[L+1]:
                        L += 1
                    while L < R and nums[R]==nums[R-1]:
                        R -= 1
                    L=L+1
                    R=R-1
                elif ( nums[i] + nums[L] + nums[R] > 0):
                    R = R - 1
                else:
                    L = L + 1
        return res
