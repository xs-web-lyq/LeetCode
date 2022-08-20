/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let p1 = head;
    let p2 = head;
    while(p1 && p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2){
            return true;
        }  
    }
    return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // 解题思路使用快慢指针，当快慢指针相遇时表明存在环否则不存在

    // 判断是否时空链表或者单一节点
    if(head == null || head.next == null) return false;
    // 设置快慢指针使其指向head；
    let p = q = head;
    // 使用do while循环，避免第一次接因为快慢指针相等而跳出循环
    do{
        p = p.next;
        q = q.next.next;
        // 当快指针为null,或者快指针的next指向null 标识已经到尽头，没用环
        // 如果快慢指针相等则表明有环
    }while(q !== null && q.next !== null && p != q)
    // 最后返回快慢指针是否指向相等
    return p == q;
};
