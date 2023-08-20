# -*- codeing = utf-8 -*-
# @Time : 2023-8-20 22:27
# @Author : 刘永奇
# @File : 34. 在排序数组中查找元素的第一个和最后一个位置.py
# @Software : PyCharm
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        leftID = self.search(nums,target)
        rightID = self.search(nums,target + 1) - 1
        if leftID <= rightID:
            return [leftID,rightID]
        return [-1,-1]


    def search(self,nums,target):
        left = 0
        right = len(nums) - 1
        while(left <= right):
            mid  = (left + right) // 2
            if nums[mid] >= target:
                right = mid - 1
            else:
                left = mid + 1
        return right + 1
