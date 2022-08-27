// ### 解题思路
// 2题--两数相加
// 由题意可知：一个n位的数，和一个m位的数，个，十 ，百 ....各个位的数都是存放在一个链表节点上的。且表头节点存放着个位数。
// 所以由此可知，通过设出两个p1,p2指针分别指向l1,l2.并循环同步移动,p1,p2指针向后移动。直到其中一个指针指向位null时，停止该指针移动将以后的v值赋值为0，进行加法运算。只移动另外一个指针直到尽头。在这个过程中，设置变量count记录进位。 Math.floor(v3 / 10); 使用Math库中的floor函数向下取整
// 首先，定义常量l3为结果链表的头部赋值为0，第一个指针值不使用，const l3 = new ListNode(0); 设p3为l3的指针变量。
// 将p1,p2的值和count相加并赋值给p3节点。

// 最后循环结束后要判断，最后一次相加是否进位，如果进位则在创建一个节点添加到p3.next上
// ### 代码

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let count = 0;
    while(p1 || p2){
        const v1 = p1 ? p1.val : 0;
        const v2 = p2 ? p2.val : 0;
        const v3 = v1 + v2 + count;
        count = Math.floor(v3 / 10);
        p3.next = new ListNode(v3 % 10) //记录相加后的个位数
        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next; //移动指针
        p3 = p3.next;
    }        
    if(count){
            p3.next = new ListNode(count);
    }
    return l3.next
};




var addTwoNumbers = function(l1, l2) {
    if(l1 == null) return l2
    if(l2 == null) return l1
    let head = new ListNode(0,null)
    let p1 = l1, p2 = l2;
    let info = 0;
    let p3 = head
    while(p1 !== null || p2 !== null || info){
        let s1 = p1 ? p1.val : 0
        let s2 = p2 ? p2.val : 0 
        let add = s1 + s2 + info ;
        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
        info = Math.floor(add / 10)
        p3.next = new ListNode((add % 10),null)
        p3 = p3.next;
    }
    return head.next
};