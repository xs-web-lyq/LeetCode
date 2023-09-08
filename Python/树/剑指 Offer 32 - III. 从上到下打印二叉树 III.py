# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 18:16
# @Author : 刘永奇
# @File : 剑指 Offer 32 - III. 从上到下打印二叉树 III.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        self.leve(root,0,res)
        return res
    def leve(self,root,k,res):
        if not root:return
        if k == len(res):res.append([])
        if k % 2 == 1:res[k].insert(0,root.val)
        else:res[k].append(root.val)
        self.leve(root.left,k+1,res)
        self.leve(root.right,k+1,res)
        return
