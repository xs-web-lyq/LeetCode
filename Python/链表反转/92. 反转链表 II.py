# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 9:54
# @Author : 刘永奇
# @File : 92. 反转链表 II.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if not head or not head.next:return head
        # 小技巧：使用虚拟头节点来兼容从头开始反转的情况
        h = ListNode(0,head)
        p  = h
        m = left
        while m > 1:
            p = p.next
            m -= 1
        p.next = self.reverse(p.next,right-left+1)
        return h.next

    def reverse(self,head,n):
        if n==1:return head
        tail = head.next
        p = self.reverse(head.next,n-1)
        head.next = tail.next
        tail.next = head
        return p