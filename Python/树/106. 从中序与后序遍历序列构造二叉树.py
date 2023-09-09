# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 21:48
# @Author : 刘永奇
# @File : 106. 从中序与后序遍历序列构造二叉树.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if len(postorder) == 0: return None
        l = len(postorder)
        pos = 0
        while inorder[pos] != postorder[-1]:pos+=1
        l_in = inorder[:pos]
        l_post = postorder[:pos]
        r_in = inorder[pos+1:]
        r_post = postorder[pos:l-1]
        node = TreeNode(postorder[-1])
        node.left = self.buildTree(l_in,l_post)
        node.right = self.buildTree(r_in,r_post)
        return node