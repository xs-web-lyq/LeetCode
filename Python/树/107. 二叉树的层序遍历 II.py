# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 20:26
# @Author : 刘永奇
# @File : 107. 二叉树的层序遍历 II.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def level(self,root,k,res):
        if not root:return
        if k == len(res):res.append([])
        res[k].append(root.val)
        self.level(root.left,k+1,res)
        self.level(root.right,k+1,res)

    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        self.level(root,0,res)
        l = 0
        r = len(res) - 1
        while l < r:
            res[l],res[r] = res[r],res[l]
            l += 1
            r -= 1
        return res