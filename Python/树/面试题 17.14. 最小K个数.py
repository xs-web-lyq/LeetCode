# -*- codeing = utf-8 -*-
# @Time : 2023-9-9 16:48
# @Author : 刘永奇
# @File : 面试题 17.14. 最小K个数.py
# @Software : PyCharm
class Solution:
    def smallestK(self, arr: List[int], k: int) -> List[int]:
        res = []
        heapq.heapify(arr)
        for i in range(k):
            res.append(heappop(arr))
        return res