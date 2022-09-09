/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
    // 解题思路： 正确的二叉树当节点的左右子树都为#时 -- 将节点变成 # 最后二叉树将会变成 一个 #
    // 在变化过程中--当不会出现只有两个#节点的情况  --- 出现就是二叉树错误


    // 将字符串以逗号进行分隔，
    let str = preorder.split(',');
    
    // 设置操作栈
    let stack = []

    // 遍历str 将str中元素一个一个压入操作栈   进行判断 
    for(let i = 0 ;i < str.length; i++){
        stack.push(str[i]);
        // 当操作栈中存在三个元素时 并且 后两个都为 # 时 进行合并变化 
        while(stack.length >= 3 && stack[stack.length - 1] == '#' && stack[stack.length - 2] == '#'){
            stack[stack.length - 3] = '#';
            stack.pop();
            stack.pop();
        }
        // 但操作栈中有两个元素时，并且都为 # 则说明为不规范 二叉树序列 返回 false
        if(stack.length == 2 && stack[stack.length - 1] == '#' && stack[stack.length - 2] == '#'){
            return false;
        }
    }
    // 最后 栈中元素为一个 并且为 # 元素
    return stack.length == 1 && stack[stack.length - 1] == '#';
};