# -*- codeing = utf-8 -*-
# @Time : 2023-8-15 14:15
# @Author : 刘永奇
# @File : 9. 回文数.py
# @Software : PyCharm
class Solution:
    def isPalindrome(self, x: int) -> bool:
        # if x < 0: return False
        # stack = []
        # while x:
        #     stack.append(x % 10)
        #     x = x // 10
        # return stack == stack[::-1]

        return str(x) == str(x)[::-1]
