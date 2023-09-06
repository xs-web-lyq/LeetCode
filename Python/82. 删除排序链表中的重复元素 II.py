# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 11:32
# @Author : 刘永奇
# @File : 82. 删除排序链表中的重复元素 II.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        ret = ListNode(0,head)
        p = ret
        while p.next:
            if p.next.next and p.next.val == p.next.next.val:
                q = p.next.next
                while q and q.val == p.next.val:
                    q = q.next
                p.next = q
            else:
                p = p.next
        return ret.next