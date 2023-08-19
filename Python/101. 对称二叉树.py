# -*- codeing = utf-8 -*-
# @Time : 2023-8-19 12:17
# @Author : 刘永奇
# @File : 101. 对称二叉树.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:return True
        def symmetric(L,R):
            if not L and not R: return True
            if not L or not R or L.val != R.val: return False
            return symmetric(L.left,R.right) and symmetric(L.right,R.left)
        return symmetric(root.left,root.right)