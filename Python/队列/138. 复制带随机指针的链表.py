# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 10:35
# @Author : 刘永奇
# @File : 138. 复制带随机指针的链表.py
# @Software : PyCharm
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""


class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head: return None
        q = head
        while q:
            p = Node(q.val)
            p.next = q.next
            p.random = q.random
            q.next = p
            q = p.next
        p = head.next
        while p:
            if p.random: p.random = p.random.next
            p = p.next
            if p: p = p.next
        new_head = head.next
        p = head
        while p:
            q = p.next
            p.next = q.next
            if q.next: q.next = p.next.next
            p = p.next
        return new_head

