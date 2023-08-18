# -*- codeing = utf-8 -*-
# @Time : 2023-8-18 21:58
# @Author : 刘永奇
# @File : 108. 将有序数组转换为二叉搜索树.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        def makeTree(nums):
            if len(nums) == 0:
                return None
            mid = len(nums) // 2
            root = TreeNode(val = nums[mid])
            root.left = makeTree(nums[:mid])
            root.right = makeTree(nums[mid+1:])

            return root

        return makeTree(nums)
