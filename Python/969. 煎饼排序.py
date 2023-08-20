# -*- codeing = utf-8 -*-
# @Time : 2023-8-20 12:05
# @Author : 刘永奇
# @File : 969. 煎饼排序.py
# @Software : PyCharm
class Solution:
    def pancakeSort(self, arr: List[int]) -> List[int]:
        ans = []
        for n in range(len(arr),1,-1):
            index = 0
            for i in range(n):
                if arr[index] < arr[i]:
                    index = i
            if index == n - 1:
                continue
            m = index
            for i in range((m + 1)//2):
                arr[i] , arr[m - i] = arr[m - i] ,arr[i]
            for i in range(n // 2):
                arr[i],arr[n - 1 - i] = arr[n - 1 - i],arr[i]
            ans.append(index + 1)
            ans.append(n)
        return ans
