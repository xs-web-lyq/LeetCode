# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 10:20
# @Author : 刘永奇
# @File : 25. K 个一组翻转链表.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        ret = ListNode(0, head)
        p = ret
        q = p.next
        p.next = self.reverseN(q, k)
        while (p.next != q):
            p = q
            q = p.next
            p.next = self.reverseN(q, k)
        return ret.next

    def reverseN(self, head, n):
        p = head
        cnt = n
        while n > 1 and p:
            n -= 1
            p = p.next
        if not p: return head
        return self._reverseN(head, cnt)

    def _reverseN(self, head, n):
        if n == 1: return head
        tail = head.next
        p = self._reverseN(head.next, n - 1)
        head.next = tail.next
        tail.next = head
        return p


