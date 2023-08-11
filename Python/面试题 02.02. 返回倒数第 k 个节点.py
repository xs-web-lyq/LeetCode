# -*- codeing = utf-8 -*-
# @Time : 2023-8-11 22:23
# @Author : 刘永奇
# @File : 面试题 02.02. 返回倒数第 k 个节点.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def kthToLast(self, head: ListNode, k: int) -> int:

        left = head
        right = head
        for i in range(k):
            right = right.next
        while right:
            left = left.next
            right = right.next
        return left.val