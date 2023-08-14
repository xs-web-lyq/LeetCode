# -*- codeing = utf-8 -*-
# @Time : 2023-8-14 22:40
# @Author : 刘永奇
# @File : LCR 018. 验证回文串.py
# @Software : PyCharm
class Solution:
    def isPalindrome(self, s: str) -> bool:
        if s == '': return True
        l = 0
        s1 = ''
        for i in s:
            if i.isalnum():
                s1 += i.lower()

        return s1 == s1[::-1]
