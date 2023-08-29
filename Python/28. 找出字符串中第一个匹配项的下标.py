# -*- codeing = utf-8 -*-
# @Time : 2023-8-28 22:00
# @Author : 刘永奇
# @File : 28. 找出字符串中第一个匹配项的下标.py
# @Software : PyCharm
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        s1 = 0
        s2 = 0
        l1 = len(haystack)
        l2 = len(needle)
        while s1 <= l1 - l2:
            tmp = s1
            for i in range(l2):
                if haystack[i + s1] != needle[i]:
                    s1 += 1
                    break
            if tmp == s1:
                return s1
        return -1


