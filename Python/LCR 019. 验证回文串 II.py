# -*- codeing = utf-8 -*-
# @Time : 2023-8-15 14:52
# @Author : 刘永奇
# @File : LCR 019. 验证回文串 II.py
# @Software : PyCharm
class Solution:
    def validPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        while left <= right and s[right] == s[left]:
            left+=1
            right-=1
        if left > right:
           return True
        else:
            temp1 = s[:left] + s[left+1:]
            temp2 = s[:right] + s[right+1:]
            if temp1==temp1[::-1]:
                return True
            if temp2 == temp2[::-1]:
                return True
            return False