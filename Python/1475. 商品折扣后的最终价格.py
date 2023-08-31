# -*- codeing = utf-8 -*-
# @Time : 2023-8-31 16:10
# @Author : 刘永奇
# @File : 1475. 商品折扣后的最终价格.py
# @Software : PyCharm
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        s  = []
        res = prices
        for i in range(len(prices)):
            while s and prices[i] <= prices[s[-1]]:
                res[s[-1]] = prices[s[-1]] - prices[i]
                s.pop()
            s.append(i)

        return res
