# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 21:50
# @Author : 刘永奇
# @File : 222. 完全二叉树的节点个数.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        return self.countNodes(root.left) + self.countNodes(root.right) + 1