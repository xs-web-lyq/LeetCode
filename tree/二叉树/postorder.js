const bt = require('./bt')

const postorder = (root)=>{
    if(!root) {return;}
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}

// 后序遍历非递归算法
// const preorder = (root) =>{
//     if(!root) {return;}
//     const outputStack = [];
//     const stack = [root];
//     while(stack.length){
//         const n = stack.pop();
//         outputStack.push(n);
//         if(n.left) stack.push(n.left);
//         if(n.right) stack.push(n.right);
//     }
//     while(outputStack.length){
//         const n = outputStack.pop();
//         console.log(n.val);
//     }

// }

postorder(bt)