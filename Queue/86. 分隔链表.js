/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    // 创建两个虚拟头节点，rs存放小于x的节点，rb存放大于x的节点
    let rs = new ListNode(0,null), rb = new ListNode(0,null);
    // 将rs节点地址赋值给s --- rb节点赋值给b
    let s = rs , b = rb;
    // 将头节点赋值给p，设置标记节点q

    let p = head, q;

    while(p !== null){
        // q 记录 p节点的下一个节点地址
        q = p.next
        // 当小于x时
        if(p.val < x){
            // 先将p节点从原链表上截取下来--将p.next设置为s.next值
            p.next = s.next;
            //将节点p链接到s.next上
            s.next = p;
            // 将s节点后移
            s = p;
        }else {
            p.next = b.next;
            b.next = p;
            b = p ;
        }
        // 将p节点在原链表上后移
        p = q;
    }
    // 将rs链表尾部与rb链表首元节点连接
    s.next = rb.next;
    return rs.next
    
};