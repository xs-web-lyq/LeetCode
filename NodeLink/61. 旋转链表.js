/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    // 排除空链表
    if(head == null) return head
    // 设置p指针 将p指针移到最后一个节点
    let p = head;
    // 记录总节点数
    let n = 1
    while(p.next !== null){
       p  = p.next 
       n++;
    } 
    // 将链表变成循环链表
    p.next = head
    // 如果k过大 对n 取余,减少循环次数
    k %= n
    // 以为是循环左右,将循环字数变为循环于n的差,使用循环右移解决
    k = n - k;
    // 循环k次
    while(k--){
        p = p.next
    }
    // 因为从最后节点开始循环,所以p节点的下一个节点为,循环的头部
    head = p.next;
    p.next = null
    return head;

};