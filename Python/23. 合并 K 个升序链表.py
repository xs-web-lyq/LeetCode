# -*- codeing = utf-8 -*-
# @Time : 2023-8-12 10:03
# @Author : 刘永奇
# @File : 23. 合并 K 个升序链表.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def merge(L1, L2):
        C = c = ListNode()
        p1 = L1
        p2 = L2
        while p1 and p2:
            if p1.val <= p2.val:
                c.next = p1
                c = p1
                p1 = p1.next
            else:
                c.next = p2
                c = p2
                p2 = p2.next
        c.next = p1 if p1 else p2
        return C.next

    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:

        k = len(lists)
        if k == 0: return None
        if k == 1: return lists[0]
        info = merge(lists[0], lists[1])
        for i in range(2, k):
            info = merge(info, lists[i])

        return info
