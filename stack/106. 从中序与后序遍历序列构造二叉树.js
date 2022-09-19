/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    // 解题思路：通过后序遍历找到根节点值创建根节点
    // 
    // 找到中序遍历的左子树，中序遍历的右子树， 后序遍历的左子树，后序遍历的右子树
    // 递归调用--通过左子树中序遍历,后序遍历子树,找到左子树根节点递归调用

    if(!inorder.length) return null;
    let val = postorder[postorder.length - 1];
    let root = new TreeNode(val);
    let per = 0;
    while(per < inorder.length){
        if(val == inorder[per]){
            break;
        }
        per++;
    }
    let l_in = [];
    let l_post = [];
    let r_in = []; 
    let r_post = [];
    for(let i = 0 ; i < per; i++){
        l_in.push(inorder[i]);
        l_post.push(postorder[i])
    }
    for(let i = per; i < inorder.length - 1;i++){
        r_in.push(inorder[i+1]);
        r_post.push(postorder[i])
    }
    root.left = buildTree(l_in,l_post);
    root.right = buildTree(r_in,r_post);
    
    return root

};