/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let queue = [root];
    let set = new Set();
    while(queue.length){
        let n = queue.shift();
        if(set.has(k-n.val)){
            return true;
        }else{
            set.add(n.val);
        }
        if(n.left){queue.push(n.left)}
        if(n.right){queue.push(n.right)}
    }
    return false;
};