/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    // 使用s栈模拟popped栈的过程，如果当pushed中的数据在压入的过程中有一次不能等于popped对应的数据直接返回false;
    // 根据popped栈中的数据遍历，将pushed栈中的数据压入s栈中直到达到popped中的首元素，将s首元素弹出栈，持续如此
    // popped栈中的数据只会和s栈顶元素或者后续压入s栈的数据相等，持续压入当全部压入还不相等则返回false,当popped遍历完成则合法返回true;
    let s = [];
    // 
    for(let i = 0 , j = 0 ; i < popped.length; i++){
        // 当pushed为全部压入栈s并且栈空或者s栈顶元素不等于popped栈遍历到的元素时，持续将pushed栈中数据压入s栈
        while(j < pushed.length && (!s.length || s[s.length - 1] !== popped[i])){
            s.push(pushed[j]);
            j++;
        }
        // 如果压入完成时查看s栈顶元素是否与当前popped栈遍历元素相等 == 如果不等返回false 否则将s栈顶元素弹出
        if(s[s.length - 1] !== popped[i]) return false;

        s.pop();
    }
    // 等popped栈遍历结束说明popped栈弹出合理返回true
    return true;
};