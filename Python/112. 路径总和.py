# -*- codeing = utf-8 -*-
# @Time : 2023-8-18 22:27
# @Author : 刘永奇
# @File : 112. 路径总和.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        # 如果为空二叉树直接返回False
        if root == None: return False
        # 当到达叶子节点时判断目标与当前节点值是否相等，如果相等返回True否则返回False
        if not root.left and not root.right:
            return targetSum == root.val
        # 递归调用，左右子树中是否有符合条件的
        return self.hasPathSum(root.left,targetSum - root.val) or self.hasPathSum(root.right,targetSum-root.val)