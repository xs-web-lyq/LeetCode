# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 21:35
# @Author : 刘永奇
# @File : 105. 从前序与中序遍历序列构造二叉树.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if len(preorder) == 0: return None
        pos = 0
        while inorder[pos] != preorder[0]:
            pos += 1
        l_pre = preorder[1:pos+1]
        l_in = inorder[:pos]
        r_pre = preorder[pos+1:]
        r_in = inorder[pos+1:]
        node = TreeNode(preorder[0])
        node.left = self.buildTree(l_pre,l_in)
        node.right = self.buildTree(r_pre,r_in)
        return node