/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    let node = new ListNode(-1,head);
    let str = '';
    while(node.next){
        str += node.next.val;
        node = node.next;
    }
    let left = 0,right = str.length-1;
    while(left<=right){
        
        if(str[left] !== str[right]){
            return false;
        }else{
            left++;
            right--;
        }
    }
    return true;

};