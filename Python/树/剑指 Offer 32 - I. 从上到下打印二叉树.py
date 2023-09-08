# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 18:00
# @Author : 刘永奇
# @File : 剑指 Offer 32 - I. 从上到下打印二叉树.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[int]:
        if not root: return []
        ans = []
        queue = [root]
        while len(queue):
            temp = queue.pop(0)
            ans.append(temp.val)
            if temp.left:queue.append(temp.left)
            if temp.right:queue.append(temp.right)
        return ans