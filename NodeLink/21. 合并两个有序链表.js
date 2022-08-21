/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // 解题思路：合并两链表，因为不确定头节点是哪一个链表头，所以需要使用虚拟头节点，使用两个指针分别指向两个链表的头部，比较大小判断哪一个小成为连接到虚拟头节点的下一个节点；当其中一个链表遍历完成后，将另外一个链表的剩余节点直接连接到新合并链表的尾部


    //首先判断两个链表是否有空链表，如果有空链表就返回另外的一个链表
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    // 设置虚拟头节点
    let tail = new ListNode(0,null);
    // 指向虚头的指针--合并链表的操作指针
    let new_list = tail

    // 两个链表的操作指针---一般不会直接操作给的头节点指针
    let p = list1 , q = list2;
    // 当链表的操作指针指向空时：表明其中一个链表遍历完成--跳出循环
    while(p !== null && q !==null){
    
        if(p.val <= q.val){
            // 将小的节点连接到合并链表操作指针的next上
            new_list.next = p; 
            // 后移操作指针
            new_list = p
            // 后移链表指针
            p = p.next;
        }else{
            new_list.next = q;
            new_list = q
            q = q.next;
        }
    }
    // 当其中一个链表操作指针为空时将另外一个两边的操作指针直接链接到合并操作指针后面完成连接
    if(p == null) new_list.next = q;
    if(q == null) new_list.next = p
    // 返回虚拟头节点next指向
    return tail.next
};