# -*- codeing = utf-8 -*-
# @Time : 2023-8-23 21:23
# @Author : 刘永奇
# @File : 347. 前 K 个高频元素.py
# @Software : PyCharm
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dic = Counter(nums)
        tmp = list(dic.items())
        tmp.sort(key=lambda x : x[1],reverse=True)
        res = []
        for i in range(k):
            res.append(tmp[i][0])
        return res
