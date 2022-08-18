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
 var reverseKGroup = function(head, k) {
    // p为上一个区间的最后一个节点,q为此次区间的头节点
    let ret = new ListNode(0,head) , p = ret, q = p.next;
    // 循环 当p.next == q时跳出循环--- 满足条件就将 上一区间的反转后尾节点赋给p , 将下一个区间的头节点赋给q,进行下一个区间的反转  
    while((p.next = reverseN(q,k)) !== q){
        p = q;
        q = p.next;
    }
    return ret.next;
};

// 反转函数
function reverseN(head,n){
    // 首先判断是否能反转,也就是从head往后是否有n个节点
    let p = head;
    let k = n;
    // 循环判断当跳出时 p 是否为null,如果为null说明不足n个节点
    while(--n && p) p = p.next;
    // 返回head不进行反转
    if(p == null) return head;
    // 有n 个节点执行区间反转函数
    return _reverseN(head,k) 
}   
// 反转从head开始n个节点
function _reverseN(head,n){
    // 如果n==1 说明递归到了最后一个节点
    if(n == 1) return head;
    // tail指向最后一个节点,head指向倒数第二个节点,
    let tail = head.next , p = _reverseN(head.next,n-1)
    // 将tial指向赋给head.next,  head 赋给 tail.next
    head.next = tail.next;
    tail.next = head;
    // 返回,区间的新头节点
    return p;

}