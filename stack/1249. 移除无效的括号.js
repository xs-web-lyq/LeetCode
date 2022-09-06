/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    // 前后扫描两次字符串
    let s1 = '' , s2 = '';
    // 第一次扫描从左向右扫描---去除多余的右括号
    for(let i = 0, cnt = 0 ; i < s.length; i++){
        if(s[i] == '(' || s[i] != ')'){
            if(s[i] == '(') cnt++ 
            s1 += s[i]
        }else{
            // 如果左右括号匹配去除当前右括号
            if(cnt == 0) continue;
            cnt--
            s1 += s[i]
        }
    }
    // 第二次扫描从右向左扫描--去除多余的左括号
    for(let i = s1.length - 1, cnt = 0 ; i >= 0; i--){
        if(s1[i] == ')' || s1[i] != '('){
            if(s1[i] == ')') cnt++ 
            s2  = s1[i] + s2
        }else{
            // 如果cnt==0 ; 去除当前左括号
            if(cnt == 0) continue;
            cnt--
            s2  = s1[i] + s2
        }
    }
    return s2
};