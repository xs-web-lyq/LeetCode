# -*- codeing = utf-8 -*-
# @Time : 2023-8-20 12:05
# @Author : 刘永奇
# @File : 2236. 判断根结点是否等于子结点之和.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def checkTree(self, root: Optional[TreeNode]) -> bool:
        return root.val == root.left.val + root.right.val