// ### 解题思路
// 删除重复元素：
// 首先要删除链表元素，就必须想到链表的遍历方式和删除链表上节点的操作方式。
// 先设p1为工作指针指向head，其次对链表进行while循环遍历，遍历条件是 p1 && p1.next 同时存在（这个地方我犯了错误只写了p1），因为在判断节点值相等时，p1.val === p1.next.val（p1.next.val不存在会报错）。
// 如果相等进入if语句将待删除节点赋值给p2以备delete是否空间。p1.next = p1.next.next;将p1.next节点从链表中取出。
// 可能会有在if中书写（p1 = p1.next;）将工作指针后移。造成[1,1,1]这种测试样例通过不了。所以要考虑周全。。。哈哈哈我就犯了这个考虑不全。记住前车之鉴哦/
// 如果不相等就可以直接将工作指针后移了。。。最后就将head返回就行了哦。。

// ### 代码


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
    let p1 = head;
    while(p1 && p1.next){
        let p2
        if(p1.val === p1.next.val){
            p2 = p1.next;
            p1.next = p1.next.next;
            delete(p2);
        }else{
            p1 = p1.next;
        }
    }
    return head
};
