/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let str = ''
    // pre记录新的有效字符串的开始位置，cnt记录匹配括号是否成对
    for(let i = 0 , pre = 0 , cnt = 0; i < s.length; i++){
        // 左括号cnt++
        if(s[i] == '(') cnt++;
        // 右括号cnt--
        else cnt--;
        // 如果cnt!==0；表示有效字符串还未结束直接继续循环
        if(cnt !== 0) continue;
        // 如果有效字符串到达；截取所需字符串
        str += s.substring(pre+1,i);
        // 更新有效字符串开始位置pre
        pre = i + 1
    }
    return str
};