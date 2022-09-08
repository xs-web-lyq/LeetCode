/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
 var exclusiveTime = function(n, logs) {
    let ans = new Array(n).fill(0);
    // 栈vID 记录执行的函数序号，
    let vID = [];
    for(let i = 0, pre = 0; i < logs.length; i++){
        let item = logs[i].split(':')
        let id = item[0];
        let status = item[1];
        let time_stamp = item[2];
        // 当栈非空 - - 到达下一个记录点 使用差值赋值给栈顶记录的函数序号执行时间，如果为结束状态记录点则加一 否则加0
        if(vID.length) ans[vID[vID.length - 1]] += Number(time_stamp) - pre + Number((status == 'end'))
        // 更新pre值 如果为结束节点则进行加1操作，如果为开始加0
        pre = Number(time_stamp) + Number((status == 'end'));
        // 如果为开始将函数序号添加入栈中
        if(status == 'start') vID.push(id);
        // 结束就将序号弹出栈中
        else vID.pop()
        
    }
    return ans
};