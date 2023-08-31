# -*- codeing = utf-8 -*-
# @Time : 2023-8-31 15:58
# @Author : 刘永奇
# @File : 901. 股票价格跨度.py
# @Software : PyCharm
class StockSpanner:

    def __init__(self):
        self.s = []
        self.t = 0

    def next(self, price: int) -> int:
        self.t += 1
        res = 0
        while (len(self.s) != 0) and (self.s[-1][0] <= price):
            self.s.pop()
        if len(self.s) == 0:
            res = self.t
        else:
            res = self.t - self.s[-1][1]

        self.s.append([price, self.t])
        return res

# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)