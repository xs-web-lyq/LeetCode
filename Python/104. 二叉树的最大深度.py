# -*- codeing = utf-8 -*-
# @Time : 2023-8-17 12:06
# @Author : 刘永奇
# @File : 104. 二叉树的最大深度.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def depth(root):
            if root == None: return 0
            return max(depth(root.left), depth(root.right)) + 1

        return depth(root)