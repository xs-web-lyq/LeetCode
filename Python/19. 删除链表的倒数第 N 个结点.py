# -*- codeing = utf-8 -*-
# @Time : 2023-8-11 22:30
# @Author : 刘永奇
# @File : 19. 删除链表的倒数第 N 个结点.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        S = ListNode(0, head)
        left = S
        right = head
        for i in range(n):
            right = right.next

        while right:
            left = left.next
            right = right.next
        left.next = left.next.next

        return S.next