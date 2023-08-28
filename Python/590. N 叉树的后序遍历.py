# -*- codeing = utf-8 -*-
# @Time : 2023-8-28 20:05
# @Author : 刘永奇
# @File : 590. N 叉树的后序遍历.py
# @Software : PyCharm
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        res = []
        self.post(root,res)
        return res

    def post(self,root,res):
        if not root:
            return
        for item in root.children:
            self.post(item,res)
        res.append(root.val)