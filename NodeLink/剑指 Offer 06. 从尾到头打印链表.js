/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let arr = [];
    let p = head;

    // 直接遍历使用js数组方法unshift 

    // while(p){
    //     arr.unshift(p.val);
    //     p = p.next
    // }

    // 递归
    fun(p,arr)
    return arr
};

function fun(p, arr){
    if(p == null) return ;
    fun(p.next,arr) 
    arr.push(p.val)
}
