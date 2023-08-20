# -*- codeing = utf-8 -*-
# @Time : 2023-8-20 18:14
# @Author : 刘永奇
# @File : 662. 二叉树最大宽度.py
# @Software : PyCharm
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # 因为需要计算节点中间的空节点个数所以相当于一个完全二叉树，根据完全二叉树的性质，节点的左子树为节点下标的二倍，右子树为节点下标的二倍加一
        # 有根节点最短为1
        res = 1
        # 将节点附带一个坐标属性来计算层宽
        arr = [[root,1]]
        while len(arr):
            # 记录下一次的节点坐标集
            tmp = []
            for node , index in arr:
                # 存在就添加进去
                if node.left: tmp.append([node.left,2*index])
                if node.right: tmp.append([node.right,2*index + 1])
            # 计算当前层最大宽度
            res = max(res , arr[-1][1] - arr[0][1] + 1)
            arr = tmp
        return res

