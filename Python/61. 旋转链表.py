# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 10:41
# @Author : 刘永奇
# @File : 61. 旋转链表.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next: return head
        n = 1
        p = head
        while p.next:
            p = p.next
            n += 1
        p.next = head
        k %= n
        l = n - k
        while l:
            p = p.next
            l -= 1
        res = p.next
        p.next = None
        return res


