/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let ans = []
    pre(root ,ans);
    return ans
};

function pre(root , ans){
    if(root == null) return ;
    ans.push(root.val)
    if(root.children) {
        for(let i = 0 ; i < root.children.length; i++){
            pre(root.children[i],ans);
        }
    }
}