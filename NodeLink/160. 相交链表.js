/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    let a = headA;
    while(a !== null){
        set.add(a);
        a = a.next;
    }
    a = headB;
    while(a !== null){
        if(set.has(a)){
            return a;
        }
        a = a.next;
    }
    return null;
};



 
 var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null
    let curA = headA, curB = headB;

    // A + B + C == C + B + A
    // 如果两个走到头是去另一个链表上走当走到交叉处是会相遇，即使没有交接点也会在走完两链表指针指向null时结束
    while(curA !== curB){
        curA = curA !== null ? curA.next : headB;
        curB = curB !== null ? curB.next : headA;
    }
    return curA
};