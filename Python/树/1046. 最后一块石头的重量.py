# -*- codeing = utf-8 -*-
# @Time : 2023-9-9 16:58
# @Author : 刘永奇
# @File : 1046. 最后一块石头的重量.py
# @Software : PyCharm
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-x for x in stones]
        heapq.heapify(stones)
        while len(stones) > 1:
            y = heapq.heappop(stones)
            x = heapq.heappop(stones)
            if y == x:continue
            heapq.heappush(stones,y-x)
        if len(stones):return -stones[0]
        return 0
