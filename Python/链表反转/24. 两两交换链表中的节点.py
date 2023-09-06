# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 10:59
# @Author : 刘永奇
# @File : 24. 两两交换链表中的节点.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        ret = ListNode(0, head)
        p = ret
        q = p.next
        p.next = self.reverseN(q, 2)
        while p.next != q:
            p = q
            q = p.next
            p.next = self.reverseN(q, 2)
        return ret.next

    def _reverseN(self, head, n):
        if n == 1: return head
        tail = head.next
        p = self._reverseN(head.next, n - 1)
        head.next = tail.next
        tail.next = head
        return p

    def reverseN(self, head, n):
        p = head
        cnt = n
        while n > 1 and p:
            n -= 1
            p = p.next
        if not p: return head
        return self._reverseN(head, cnt)