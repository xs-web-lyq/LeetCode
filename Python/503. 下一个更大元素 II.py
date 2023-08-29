# -*- codeing = utf-8 -*-
# @Time : 2023-8-29 18:20
# @Author : 刘永奇
# @File : 503. 下一个更大元素 II.py
# @Software : PyCharm
class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        # 寻找下一个更大的元素，使用单调栈维护一个单调递减栈
        stack = []
        ret = [-1] * len(nums)

        # 针对循环数组，我们可以通过复制数组来达到对循环数组的操作
        for i in range(len(nums)):
            while len(stack) != 0 and nums[i] > nums[stack[-1]]:
                ret[stack[-1]] = nums[i]
                stack.pop()
            stack.append(i)
        for i in range(len(nums)):
            while len(stack) != 0 and nums[i] > nums[stack[-1]]:
                ret[stack[-1]] = nums[i]
                stack.pop()
            stack.append(i)
        return ret