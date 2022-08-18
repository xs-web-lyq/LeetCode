/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let tail = new ListNode(0,head)
    let q = tail , p =q.next;
    while((q.next = reserveN(p)) != p){
        q = p;
        p = q.next;
    }
    return tail.next;

};

function reserveN(head){
    let n = 2, p = head
    while(--n && p) p = p.next;
    if(p == null) return head;
    return _reserveN(head,2)

}
function _reserveN(head,n){
    if(n == 1) return head;
    let tail = head.next ,p = _reserveN(head.next,n-1)
    head.next = tail.next;
    tail.next = head;
    return p
}