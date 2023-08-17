# -*- codeing = utf-8 -*-
# @Time : 2023-8-17 12:26
# @Author : 刘永奇
# @File : 111. 二叉树的最小深度.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:

        def depth(root):
            if root == None: return 0
            if root.left == None and root.right == None:
                return 1
            if root.left != None and root.right == None:
                return depth(root.left) + 1
            if root.left == None and root.right != None:
                return depth(root.right) + 1
            return min(depth(root.left), depth(root.right)) + 1

        return depth(root)
