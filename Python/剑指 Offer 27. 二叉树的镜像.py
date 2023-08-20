# -*- codeing = utf-8 -*-
# @Time : 2023-8-20 17:48
# @Author : 刘永奇
# @File : 剑指 Offer 27. 二叉树的镜像.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def mirrorTree(self, root: TreeNode) -> TreeNode:
        self.mirror(root)
        return root

    def mirror(self, root):
        if not root: return
        root.left, root.right = root.right, root.left
        self.mirror(root.left)
        self.mirror(root.right)