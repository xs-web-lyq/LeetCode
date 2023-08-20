# -*- codeing = utf-8 -*-
# @Time : 2023-8-20 17:31
# @Author : 刘永奇
# @File : 剑指 Offer 40. 最小的k个数.py
# @Software : PyCharm
class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        if k == 0: return list()
        hp = [-x for x in arr[:k]]
        # python中只有小根堆所以需要将数进行取反以维护前k小的数
        heapq.heapify(hp)
        for i in range(k,len(arr)):
            if -hp[0] > arr[i]:
                heapq.heappop(hp)
                heapq.heappush(hp,-arr[i])
        res = [-x for x in hp]
        return res