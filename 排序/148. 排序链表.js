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
 var sortList = function(head) {
    // 如果 head 为空值的话直接返回
    if(head == null) return head;
    // 设置l 最小值， r 最大值， mid 基准值;
    let l = head.val, r = head.val, mid;
    // p， q 操作指针， 分支链表h1 ,h2
    let p = head , q , h1 = null, h2 = null;
    // 找到l ,r 链表中的最大值，最小值计算基准值
    while(p) {
        l = Math.min(p.val,l);
        r = Math.max(p.val,r);
        p = p.next;
    }
    // 如果最大值和最小值相等说明 只有一个值或者已经有序
    if(l == r) return head;
    // mid 基准值
    mid = (l + r) / 2;
    // 分隔链表为较小子链表和较大子链表
    p = head;
    // 将链表节点一次向子表头部插入
    while(p){
        // 记录下个节点
        q = p.next;
        if(p.val <= mid){
            p.next = h1;
            h1 = p;
        } else {
            p.next = h2;
            h2 = p;
        }
        // 移动操作指针
        p = q;
    }
    // 递归较小子链表
    h1 = sortList(h1);
    // 递归较大子链表
    h2 = sortList(h2);
    // 操作较小子链表，
    p = h1;
    // 将p 指针指向较小子链表的尾部
    while(p.next) p = p.next;
    // 连接两链表
    p.next = h2;
    // 返回表头h1
    return h1;
};