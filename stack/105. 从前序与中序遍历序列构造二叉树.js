/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    // 解题思路：前序遍历找到当前树的根节点，再找到中序遍历中的根节点位置，中序遍历根节点索引前为左子树，后为右子树。
    // 中序遍历根节点索引再前序遍历序列中索引，后面为前序遍历的右子树，前面除了第一个节点包括pos指向都为前序遍历的左子树。
    // 将前序遍历子树分开---创建二叉树根节点并将值赋值给根节点递归调用将根节点左右子树递归求得并赋值给根节点左右指针。
    if(preorder.length == 0) return null;
    let pos = 0;
    while(inorder[pos] != preorder[0]) ++pos;
    let l_pre = [];
    let l_in = [];
    let r_pre = [] 
    let r_in = []
    for(let i = 0; i < pos ; i++){
        l_pre.push(preorder[i + 1]);
        l_in.push(inorder[i])
    }
    for(let i = pos + 1; i < preorder.length;i++){
        r_pre.push(preorder[i]);
        r_in.push(inorder[i])
    }
    let root = new TreeNode(preorder[0]);
    root.left = buildTree(l_pre,l_in)
    root.right = buildTree(r_pre,r_in)
    return root
};