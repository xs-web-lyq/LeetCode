# -*- codeing = utf-8 -*-
# @Time : 2023-8-19 11:45
# @Author : 刘永奇
# @File : 100. 相同的树.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # p,q都为空返回True
        if not p and not q:return True
        # p,q有一个不为空则返回False
        elif not p or not q: return False
        # 都不为空比较值如果不相等返回False
        elif p.val != q.val: return False
        # 相等则深度优先遍历左右子树
        else: return self.isSameTree(p.left,q.left) and self.isSameTree(p.right,q.right)