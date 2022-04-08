/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @description 429. N 叉树的层序遍历
 * @author 努力哦
 */
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    
    let res = [];
    while(queue.length){
        let len = queue.length;
        res.push([]);
        while(len--){
            let n = queue.shift();
            res[res.length-1].push(n.val);
            for(const children of n.children){
                queue.push(children);
            }
        }
    }    
    return res;
};