# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 18:22
# @Author : 刘永奇
# @File : 剑指 Offer 32 - II. 从上到下打印二叉树 II.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:return []
        res = []
        queue = [root]
        while len(queue):
            res.append([])
            l = len(queue)
            while l:
                temp = queue.pop(0)
                res[-1].append(temp.val)
                if temp.left:queue.append(temp.left)
                if temp.right:queue.append(temp.right)
                l-=1
        return res