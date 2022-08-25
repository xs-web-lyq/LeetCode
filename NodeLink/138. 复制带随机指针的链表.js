/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    // 解题思路：因为节点都有一个random指针，所以我们需要使用在每一个节点的后面插入一个节点同时将random指针指向插入前的节点所指向的节点，在循环将每一个插入的节点额random指针调整为random.next节点，最后在将插入的节点拆分出来组成新的链表则完成复制
    if(head == null) return head;
    let p = head
    let q;
    // 
    while(p!=null){
        q = new Node(p.val,null,null)
        q.random = p.random;
        q.next = p.next;
        p.next = q;
        p = q.next
    }
    q = head.next;
    while(q !== null){
        if(q.random !== null) q.random = q.random.next;
        // 首先将指针向后移动一位如果不存在则结束，如果存在则再往后移动一位
        (q = q.next) && (q = q.next)
        
    }

   let new_list = head.next
    p = head
    while(p !== null){
        q = p.next;
        p.next = q.next;
        if(p.next !== null) q.next = p.next.next;  
        p = p.next;
    }
    return new_list

};4 