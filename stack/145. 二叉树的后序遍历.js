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
    if(root == null) return [];


    // 递归

    // let res = []
    // postOrder = (root) =>{
    //     if(root.left) postOrder(root.left) 
    //     if(root.right) postOrder(root.right)
    //     res.push(root.val)
    // }
    // postOrder(root)
    // return res


    // 非递归
    // 结果数组
    let res = []
    // 栈结果存储节点
    let stack1 = [root];
    // 栈结构存储操作 0 - 遍历左子树 1 - 遍历右子树  2 - 抽出顶部节点值
    let stack2 = [0]
    let node
    // 节点栈长度
    while(stack1.length){
        // 去除操作数
        let state = stack2.pop()
        // 判断操作数
        switch(state){
            // 首先将操作数1压入操作数栈
            case 0:{
                stack2.push(1);
                node = stack1.pop()
                stack1.push(node)
                // 查看节点栈顶部节点是否有左子树如果有将左子树压入节点栈中，在将操作数更新为查找子树
                if(node.left){
                    stack1.push(node.left)
                    stack2.push(0)
                }
            }
               break;
            case 1:{
                 // 首先将操作数1压入操作数栈
                stack2.push(2)
                node = stack1.pop()
                stack1.push(node)
                // 查看节点栈顶部节点是否有右子树如果有将右子树压入节点栈中，在将操作数更新为查找子树
                if(node.right) {
                    stack1.push(node.right)
                    stack2.push(0)
                }
            }
               break;
            case 2:{
                // 将节点栈弹出-并将结果节点值添加到结果数组
                node = stack1.pop()
                res.push(node.val)
            }break;
        }
    }
    
    return res






};