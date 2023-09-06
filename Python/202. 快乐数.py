# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 8:42
# @Author : 刘永奇
# @File : 202. 快乐数.py
# @Software : PyCharm
class Solution:
    def isHappy(self, n: int) -> bool:
        # 链表思维，唯一指向性
        left , right = n,n
        while True:
            if (right == 1 or self.gitnext(right)==1):return True
            left = self.gitnext(left)
            right = self.gitnext(self.gitnext(right))
            if left == right:return False
    def gitnext(self,n):
        z = 0
        while n:
            z += (n % 10) * (n % 10)
            n = (n//10)
        return z