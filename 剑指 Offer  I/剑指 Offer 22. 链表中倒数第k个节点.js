/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let temNode = new ListNode(-1,head);
    let left = temNode;
    let right = temNode;
    while(k--){
        right = right.next;
    }
    while(right.next != null){
        left = left.next;
        right = right.next;
    }
    return left.next;
};