# -*- codeing = utf-8 -*-
# @Time : 2023-8-23 19:59
# @Author : 刘永奇
# @File : 230. 二叉搜索树中第K小的元素.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        res = []
        self.indor(root, res)
        return res[k - 1]

    def indor(self, root, res):
        if not root: return
        self.indor(root.left, res)
        res.append(root.val)
        self.indor(root.right, res)
