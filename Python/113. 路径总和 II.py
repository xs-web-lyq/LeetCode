# -*- codeing = utf-8 -*-
# @Time : 2023-8-19 11:14
# @Author : 刘永奇
# @File : 113. 路径总和 II.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res,path = [],[]
        def recur(root,targetSum):
            if not root: return
            path.append(root.val)
            targetSum -= root.val
            if targetSum == 0 and not root.left and not root.right:
                res.append(list(path))
            recur(root.left,targetSum)
            recur(root.right,targetSum)
            # 回溯操作
            path.pop()
        recur(root,targetSum)
        return res