/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    let arr = [];
    innter = (root) => {
        arr.push(root.val);
        if(root.left) innter(root.left);
        if(root.right) innter(root.right); 
    }
    if(root1){
        innter(root1);
    }
    if(root2){
        innter(root2);
    }

    arr.sort((a,b)=> a - b);
    return arr;
};