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