# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 8:45
# @Author : 刘永奇
# @File : LCR 024. 反转链表.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        left = None
        right = head
        while right:
            temp = right.next
            right.next = left
            left = right
            right = temp
        return left