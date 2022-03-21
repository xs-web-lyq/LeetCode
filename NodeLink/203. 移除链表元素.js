/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    // 双指针法
    let left ,right;
    // 创建一个头节点
    let node = new ListNode(-1,head);
    left = node;
    right = head;
    // 循环，当right到达空节点时结束循环
    while(right){
        // 判断是否当前节点的值与目标值相等
        if(right.val == val){
            // 相等，改变left的next指向，此时不能改变left指针指向，因为可能为连续的删除对象
            left.next = right.next;
            // 将右指针，指向下一个节点
            right = right.next;
        }else{
            // 不相等，就将右指针，指向赋值给左指针，并将右指针后移
            left = right;
            right = right.next;
        }
    }
    return node.next;

};