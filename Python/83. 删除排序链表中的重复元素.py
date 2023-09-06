# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 11:11
# @Author : 刘永奇
# @File : 83. 删除排序链表中的重复元素.py
# @Software : PyCharm
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:return head
        p = head
        while p.next:
            if p.val == p.next.val:
                p.next = p.next.next
            else:
                p = p.next
        return head