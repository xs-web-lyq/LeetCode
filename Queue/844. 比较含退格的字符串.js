/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let stack1 = []
    let stack2 = []
    // 数组是地址传递
    transform(s,stack1)
    transform(t,stack2)
    
    return stack1.join('') == stack2.join('')
};

function transform(s,stack){
    for(let i = 0 ; i < s.length; i++){
        if(s[i] == '#' && stack.length){
             stack.pop()
        }else if(s[i] !== '#'){
            stack.push(s[i])
        }
    }
}