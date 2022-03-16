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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    if(!root) return true;
    let arr =[];
    // 中序遍历-递归算法
    // const inorder = (root) => {
    //     if (!root) {
    //         return;
    //     }
    //     inorder(root.left);
    //     arr.push(root.val);
    //     inorder(root.right);
    // }
    // inorder(root);

    // 中序遍历-非递归算法
    let stack = [];
    let p = root;
    while(stack.length || p){
        while(p){
            stack.push(p);
            p = p.left;
        }
        let n = stack.pop();
        arr.push(n.val);
        p = n.right;
    }

    
    for(let i = 1;i<arr.length;i++){
        if(arr[i-1]>=arr[i]){
            return false;
        }
    }
    return true;
};