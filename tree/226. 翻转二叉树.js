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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root) return root;
    reverser1(root);
    return root;
};

function reverser1(root){
    let n = root.right;
    root.right = root.left;
    root.left = n;
    if(root.left) reverser1(root.left);
    if(root.right) reverser1(root.right);
}