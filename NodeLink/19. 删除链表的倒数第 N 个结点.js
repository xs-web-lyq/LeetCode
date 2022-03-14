/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    let flag = 1 ;
    var node = head;
    // 遍历一遍链表，记录节点个数
    while(node.next){
        flag++ ;
        node = node.next;
        
    }

    var node = head;  
    // 特殊情况，如果链表只有一个节点直接将头指针指向null  
    if(flag==1){
        head = null;
        return head;
    }
    // 计算出正向需要删除的节点位置
    let det = flag - n + 1;
    // 如果正向删除的节点为第一个，直接将头节点向后移动一位
    if(det == 1){
        head = head.next ;
        return head;
    }
    // 循环找到所要删除的节点的前一个节点
    for(let i = 1; i<det-1 ; i++){
         node = node.next;
    }
    // 将所找的的节点的next向后移动两位，从而删除所要删除的节点
    node.next = node.next.next;
    return head;
};


// 方法二 双指针法
var removeNthFromEnd = function(head, n) {
// 判断是否为空指针
if(!head) return null;

// 创建一个头节点值为-1 next 为head , pre 指向 头指针，cur 指向 首元节点
var hair = new ListNode(-1,head) , pre = hair , cur = head;
// 将cur指针向后移动n位
for(let i = 0; i < n; i++){
    cur = cur.next;
}
// 让pre cur同时向后移动直到cur指向null,此时pre指针指向被删除节点的前驱节点
while(cur){
    cur = cur.next;
    pre = pre.next;
}
// 改变pre的后续节点
pre.next = pre.next.next;
return hair.next;
}