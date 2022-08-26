/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    // 创建一个长度为26的数组，记录26个字母出现的次数
    let cnt = new Array(26).fill(0)
    // 记录各个字母出现的次数
    for(let i = 0;i < tasks.length;i++){
        cnt[tasks[i].charCodeAt() - 'A'.charCodeAt()] +=1
    }
    // 排序
    cnt.sort((a,b)=>a - b)

    // 记录最大出现次数的字母个数
    let m = 0;
    for(let i = 25;i > 0 && cnt[i] == cnt[25];i--) m++;
    // 当空格全部填满时就是任务全部就为所需要的时间，
    // 如果未被填满就是公式求得将全部最大出现次数字母全部执行完毕就是全部时间
    return Math.max(tasks.length,((cnt[25]-1) * (n + 1) + m))
};