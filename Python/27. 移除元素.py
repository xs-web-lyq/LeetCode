# -*- codeing = utf-8 -*-
# @Time : 2023-8-28 21:39
# @Author : 刘永奇
# @File : 27. 移除元素.py
# @Software : PyCharm
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        l = len(nums)
        left = 0
        right = l

        while left < right:
            if nums[left] == val:
                nums[left] = nums[right - 1]
                right -= 1
            else:
                left += 1
        return left


