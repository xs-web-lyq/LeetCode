/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    let ans = [];
    post(root ,ans);
    return ans;
};

function post(root,ans){
    if(root == null) return ;
    if(root.children !== null){
        for(let i = 0; i < root.children.length; i++){
                post(root.children[i],ans)
            }
    }
    
    ans.push(root.val);
    return ;
}