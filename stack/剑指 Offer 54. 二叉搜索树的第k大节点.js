/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    let ans = [];
    inorder(root,ans);
    return ans[ans.length - k];
};

function inorder(root,ans){
    if(root == null) return ;
    inorder(root.left,ans);
    ans.push(root.val);
    inorder(root.right,ans);
    return ;
}