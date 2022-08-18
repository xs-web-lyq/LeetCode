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
 var reverseList = function(head) {
    // let cur = null
    // if(head == null) return null;
    // let left = head , right = head.next
    // while(left !== null){
    //     left.next = cur;
    //     cur = left;
    //     left = right;
    //     if(right !== null) right = right.next;
    // }

    // return cur


    
    // 递归
    // 当为空节点或者单一节点时直接返回
    if(head == null || head.next == null) return head;
    // 保留当前节点的下一个节点，并递归调用反转函数，返回最后一个节点赋值给q 最为新的头节点
    let tail = head.next ; q = reverseList(head.next)
    // 反转相邻两个节点指针
    head.next = tail.next;
    tail.next = head;
    // 返回新头节点
    return q;



};