# -*- codeing = utf-8 -*-
# @Time : 2023-9-9 10:57
# @Author : 刘永奇
# @File : 剑指 Offer 26. 树的子结构.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def match(self,A,B):
        if not B:return True
        if not A:return False
        if A.val != B.val:return False
        return self.match(A.left,B.left) and self.match(A.right,B.right)

    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        if not A:return False
        if not B:return False
        if A.val == B.val and self.match(A,B):return True
        return self.isSubStructure(A.left,B) or self.isSubStructure(A.right,B)