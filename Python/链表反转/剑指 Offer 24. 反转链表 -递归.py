# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 9:25
# @Author : 刘永奇
# @File : 剑指 Offer 24. 反转链表 -递归.py
# @Software : PyCharm
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # 如果head为最后一个元素则直接返回为头节点
        if not head or not head.next:return head
        # 记录head节点的下一个节点
        tail = head.next
        # 递归调用进行反转，使用p记录反转后头节点
        p = self.reverseList(head.next)
        # 将tail后面节点接在head节点后
        head.next = tail.next
        # 将tail指向head节点
        tail.next = head
        return p