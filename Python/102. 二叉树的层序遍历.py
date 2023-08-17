# -*- codeing = utf-8 -*-
# @Time : 2023-8-17 12:03
# @Author : 刘永奇
# @File : 102. 二叉树的层序遍历.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root: return []
        res = []
        queue = []
        queue.append(root)

        while len(queue) != 0:
            res.append([])
            l = len(queue)
            while l != 0:
                p = queue.pop(0)
                res[-1].append(p.val)
                if (p.left != None): queue.append(p.left)
                if (p.right != None): queue.append(p.right)
                l -= 1
        return res