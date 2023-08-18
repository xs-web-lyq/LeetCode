# -*- codeing = utf-8 -*-
# @Time : 2023-8-18 22:13
# @Author : 刘永奇
# @File : 110. 平衡二叉树.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root == None: return True
        return abs(self.balance(root.right) - self.balance(root.left)) < 2 and self.isBalanced(
            root.right) and self.isBalanced(root.left)

    def balance(self, root):
        if root == None: return 0
        return max(self.balance(root.left), self.balance(root.right)) + 1

