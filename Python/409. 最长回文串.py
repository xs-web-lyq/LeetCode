# -*- codeing = utf-8 -*-
# @Time : 2023-8-15 22:05
# @Author : 刘永奇
# @File : 409. 最长回文串.py
# @Software : PyCharm
class Solution:
    def longestPalindrome(self, s: str) -> int:
        h = dict()
        for i in s:
            if i in h:
                h[i] += 1
            else:
                h[i] = 1
        add = 0
        res = 0
        for i in h.values():
            if i % 2 == 0:
                res += i
            else:
                res = res + i - 1
                add = 1
        return res + add