/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let node = new ListNode(-1,head);
    let left1,right1;
    left1 = node;

    right1 = node;
    for(let i = 0 ; i < left - 1;i++){
        left1 = left1.next; 
    }
    for(let i = 0 ; i < right + 1;i++){
        right1 = right1.next;
    }

    let reverseEnd = left1.next;
    let reverseStrat = reverseN(reverseEnd,right - left + 1);

    left1.next = reverseStrat;
    reverseEnd.next = right1;
    return node.next;
};

var reverseN = function (head,n){
    let pre , cur;
    pre = null;
    cur = head;
    for(let i = 0;i < n ; i++){
        let info = cur.next;
        cur.next = pre;
        pre = cur;
        cur = info;
    }
    return pre;
}
