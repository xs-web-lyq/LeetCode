# -*- codeing = utf-8 -*-
# @Time : 2023-8-28 20:01
# @Author : 刘永奇
# @File : N 叉树的前序遍历.py
# @Software : PyCharm
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""


class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        res = []
        self.order(root, res)
        return res

    def order(self, root, res):
        if not root:
            return []
        res.append(root.val)
        for item in root.children:
            self.order(item, res)
