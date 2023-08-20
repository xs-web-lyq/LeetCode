# -*- codeing = utf-8 -*-
# @Time : 2023-8-20 20:40
# @Author : 刘永奇
# @File : LCR 049. 求根节点到叶节点数字之和.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        total = 0
        def dfs(root,total):
            if not root:
                return 0
            total = total*10 + root.val
            if not root.left and not root.right:
                return total
            else: return dfs(root.left,total) + dfs(root.right,total)
        return dfs(root,total)