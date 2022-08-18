/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    // 首先判断是否位空链表
    if(head == null) return null
    // 使用双指针，进行遍历
    let p = q = head;
    // 判断快指针是否可以走两步
    if(q.next == null) return null
    // 使用do...while循环，双指针相遇的时候，就是快指针比慢指针多走环长减去a步
    do{
        p = p.next;
        q = q.next.next;
    }while(p !== q && q && q.next)
    // 判断是否有 环
    if(q !== p) return null
    // 将一个指针放回头节点，在循环当他们再次相遇就是环开始节点
    p = head;
    while(p != q){
        p = p.next;
        q = q.next;
    }
    return q

};