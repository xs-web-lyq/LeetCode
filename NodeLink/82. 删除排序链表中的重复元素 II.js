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
 var deleteDuplicates = function(head) {
    // 解题思路: 首先要清楚可能会改变头指针指向,所以要设置头指针
    // 当节点的下一个节点相等时下下个节点存在时,使用标记节点q从重复节点的开始向后删除相同节点,最后将q节点指向的不相同节点赋值给p.next,达到删除所有相同节点的目的,如果不满足条件就直接赋值给p.next;
    // 最后返回虚拟头节点的下一个节点指针


    // 判断是否为空
    if(head == null) return head
    // 设置虚拟头节点
    let tail = new ListNode(0,head)
    // 将头节点赋值给p, q为标记节点
    let p = tail, q
    // 当p.next存在时进入循环,
    while(p.next){
        // 如果p.next.next 存在且 值于p.next相等 ,说明此时有重复
        if(p.next.next &&  p.next.val == p.next.next.val){
            // 将p.next.next 赋值给q标记重复节点,
            q = p.next.next;
            // 从重复元素向后删除所有相同元素,使用p.next.val作为比较基准
            while(q && q.val == p.next.val) q = q.next;
            p.next = q

        }else{
            p = p.next
        }
    }
    return tail.next
};