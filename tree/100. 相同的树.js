/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    // 深度优先遍历
    // 如果p,q 节点都为null，返回true
    if(p === null && q === null){
        return true;
    }
    // 如果p,q节点只有一个为null返回false;
    else if(p === null || q === null){
        return false;
    }
    // 如果p,q两节点值不相等直接返回false;
    else if(p.val !== q.val){
        return false;
    }
    // 如果p,q节点值相等，递归，当左子树递归返回值和右子树递归返回值都为true时返回true;
    else{
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    }

};