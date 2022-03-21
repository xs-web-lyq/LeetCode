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
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    if(!root){return [] ;}
    let res = [];
    // 递归算法
    // postorder = (root) =>{
    //     if(!root) return ;
    //     postorder(root.left);
    //     postorder(root.right);
    //     res.push(root.val);
    // }
    // postorder(root);


    // 非递归算法
    const stack = [root];
    while(stack.length){
        let n = stack.pop();
        res.push(n.val);
        if(n.left){stack.push(n.left)}
        if(n.right){stack.push(n.right)}
    }
    res = res.reverse();
    return res;
};