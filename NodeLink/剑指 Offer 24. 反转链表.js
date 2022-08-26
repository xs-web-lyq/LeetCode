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
 var reverseList = function(head) {
    let p = null , q = head;
    while(q){
        let info = q.next;
        q.next = p;
        p = q;
        q = info;
    }
    return p
};