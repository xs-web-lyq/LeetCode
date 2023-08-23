# -*- codeing = utf-8 -*-
# @Time : 2023-8-23 22:34
# @Author : 刘永奇
# @File : 148. 排序链表.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        return self.sortFunc(head, None)

    def sortFunc(self, left, right):
        if not left:
            return left
        if left.next == right:
            left.next = None
            return left
        slow = fast = left
        while fast != right:
            slow = slow.next
            fast = fast.next
            if fast != right:
                fast = fast.next
        mid = slow
        return self.merge(self.sortFunc(left, mid), self.sortFunc(mid, right))

    def merge(self, L1, L2):
        T = ListNode(0)
        temp, temp1, temp2 = T, L1, L2
        while temp1 and temp2:
            if temp1.val < temp2.val:
                temp.next = temp1
                temp1 = temp1.next
            else:
                temp.next = temp2
                temp2 = temp2.next
            temp = temp.next
        if temp1:
            temp.next = temp1
        elif temp2:
            temp.next = temp2
        return T.next
