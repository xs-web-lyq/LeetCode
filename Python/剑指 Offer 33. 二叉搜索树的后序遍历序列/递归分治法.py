# -*- codeing = utf-8 -*-
# @Time : 2023-8-24 22:34
# @Author : 刘永奇
# @File : 递归分治法.py
# @Software : PyCharm
class Solution:
    def verifyPostorder(self, postorder: List[int]) -> bool:
        if len(postorder) <= 1:
            return True
        head = postorder[-1]
        l = len(postorder)
        r = l - 1
        for i in range(l - 1):
            if postorder[i] > head:
                r = i
                break
        for i in range(r):
            if postorder[i] > head:
                return False
        for i in range(r, l - 1):
            if postorder[i] < head:
                return False
        return self.verifyPostorder(postorder[:r]) and self.verifyPostorder(postorder[r:l - 1])

