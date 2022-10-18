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

// 归并排序实现链表排序
function mergeSort(head , n){
    // 当递归到空 或者 为单一节点 时 直接返回头节点
    if(head == null || head.next == null) return head;
    // 通过计算的全部节点数量 计算出 左半部分链表节点数量，， r 为右边节点个数
    let l = Math.floor(n / 2) , r = n - l;
    // lp 左边链表操作指针，rp右边链表操作指针，p为公共操作指针
    let lp = head , rp = head , p;
    // 将右边操作指针 rp 移动到第 l 个节点，
    for(let i = 1 ; i < l; i++ , rp = rp.next);
    // 将rp移动到第 l + 1 个节点---右侧链表头节点
    p = rp;
    rp = rp.next;
    p.next = null;

    // 递归左链表返回 头指针
    lp = mergeSort(lp, l);
    // 递归右链表返回 头指针
    rp = mergeSort(rp, r);
    // 结果链表
    let ret = new ListNode(0,null);
    //操作指针
    p = ret;

    // 归并排序-- 合并俩链表
    while(lp || rp){
        if(rp == null || (lp != null && lp.val <= rp.val)){
            p.next = lp;
            lp = lp.next;
            p = p.next;
        }else{
            p.next = rp;
            rp = rp.next;
            p = p.next;
        }
    }
    // 返回结果链表头部next指针
    return ret.next;
}

var sortList = function(head) {
    let p = head;
    let n = 0;
    // 计算链表长度
    while(p) {
        p = p.next;
        n++;
    }
    return mergeSort(head,n)
    
};