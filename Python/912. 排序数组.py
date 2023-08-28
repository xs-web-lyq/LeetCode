# -*- codeing = utf-8 -*-
# @Time : 2023-8-28 19:41
# @Author : 刘永奇
# @File : 912. 排序数组.py
# @Software : PyCharm
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        nums = [0] + nums
        for i in range(n // 2, 0, -1):
            self.maxHepify(nums, i, n)
        for j in range(n, 0, -1):
            nums[1], nums[j] = nums[j], nums[1]
            self.maxHepify(nums, 1, j - 1)
        return nums[1:]

    def maxHepify(self, arr, i, end):
        j = 2 * i
        while j <= end:
            if j + 1 <= end and arr[j + 1] > arr[j]:
                j = j + 1
            if arr[j] > arr[i]:
                arr[i], arr[j] = arr[j], arr[i]
                i = j
                j = 2 * i
            else:
                break








