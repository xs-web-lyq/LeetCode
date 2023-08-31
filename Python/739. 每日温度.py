# -*- codeing = utf-8 -*-
# @Time : 2023-8-31 15:23
# @Author : 刘永奇
# @File : 739. 每日温度.py
# @Software : PyCharm
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        s = []
        res = [0]*len(temperatures)
        for i in range(len(temperatures)):
            while len(s) != 0 and temperatures[i] > temperatures[s[-1]]:
                res[s[-1]] = i - s[-1]
                s.pop()
            s.append(i)
        return res