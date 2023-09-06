# -*- codeing = utf-8 -*-
# @Time : 2023-9-5 22:42
# @Author : 刘永奇
# @File : 142. 环形链表 II.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        p = q = head
        while True:
            if not (q and q.next): return None
            p = p.next
            q = q.next.next
            if p == q: break

        p = head
        while p != q:
            p = p.next
            q = q.next
        return p
