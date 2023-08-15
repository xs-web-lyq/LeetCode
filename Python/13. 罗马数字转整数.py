# -*- codeing = utf-8 -*-
# @Time : 2023-8-15 22:33
# @Author : 刘永奇
# @File : 13. 罗马数字转整数.py
# @Software : PyCharm
class Solution:
    def romanToInt(self, s: str) -> int:
        h = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        if len(s) <=1:
            return h[s]
        res = 0
        l = len(s)
        last_num = 0
        for i in range(l):
            if h[s[i]] <= last_num:
                res += h[s[i]]
            else:
                res = res + h[s[i]] - 2*last_num
            last_num = h[s[i]]
        return res