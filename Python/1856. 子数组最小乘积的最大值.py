# -*- codeing = utf-8 -*-
# @Time : 2023-8-31 16:56
# @Author : 刘永奇
# @File : 1856. 子数组最小乘积的最大值.py
# @Software : PyCharm
class Solution:
    def maxSumMinProduct(self, nums: List[int]) -> int:
        s = []
        l = [-1]*len(nums)
        r = [len(nums)]*len(nums)
        pre = [0]
        for item in nums:
            p = pre[-1] + item
            pre.append(p)
        for i in range(len(nums)):
            while s and nums[i] <= nums[s[-1]]:
                r[s[-1]] = i
                s.pop()
            if s :l[i] = s[-1]
            s.append(i)
        res = 0
        for i in range(len(nums)):
            res = max(res, nums[i] * (pre[r[i]] - pre[l[i] + 1]))
        return res % (10**9 + 7)
