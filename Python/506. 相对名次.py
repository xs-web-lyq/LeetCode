# -*- codeing = utf-8 -*-
# @Time : 2023-9-4 17:58
# @Author : 刘永奇
# @File : 506. 相对名次.py
# @Software : PyCharm
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        # 复制原数组，以备小根堆查找得分下标
        res = score.copy()
        n = len(score)
        # 创建小根堆
        heapq.heapify(score)
        grade = n
        for _ in range(n):
            a = heapq.heappop(score)
            b = grade
            idx = res.index(a)
            if b == 3:
                b = "Bronze Medal"
            if b == 2:
                b = "Silver Medal"
            if b == 1:
                b = "Gold Medal"
            res[idx] = str(b)
            grade -= 1
        return res

