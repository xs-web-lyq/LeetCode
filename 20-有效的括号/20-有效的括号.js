// 方法一
// 解题思路
// 利用栈结构进行求解。
// 首先判断长度是奇数还是偶数。进行判断返回 值

// 创建一个数组作为栈，循环遍历字符串，左括号压入栈，右括号进行与栈顶元素比对成功就弹出栈顶元素，否则匹配失败。。。最后循环结束，判断栈中长度如果为0则括号有效，否则无效。

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2 === 1){
        return false;
    }
    const str=[];
    for(let i=0;i<s.length;i += 1){
        const c = s[i]
        if(c ==='(' || c ==='{' || c ==='['){
            str.push(c);
        }else{
            const t = str[str.length-1]
            if(
                c===')'&&t==='(' || 
                c===']'&&t==='[' || 
                c==='}'&&t==='{'
            ) {
                str.pop();
            }
            else{
                return false;
            }
        }
    }
    return str.length === 0
};




// 方法二
// ### 解题思路
// 使用字典进行求解：
// 首先创建字典将三组括号key为左括号，value为右括号。供匹配使用
// 结合栈，使用字典简化条件判断的复杂。

// ### 代码

// ```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1){
        return false;
    }
    const str = [];
    const map = new Map();
    map.set('(',')')
    map.set('[',']')
    map.set('{','}')
    for(let i=0;i<s.length;i += 1){
        const c = s[i]
        if(map.has(c)){
            str.push(c);
        }else{
            const t = str[str.length-1]
            if(map.get(t)===c) {
                str.pop();
            }
            else{
                return false;
            }
        }
    }
    return str.length === 0
};