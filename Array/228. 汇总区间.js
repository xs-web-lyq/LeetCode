/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    //  边界判断
    if(!nums.length){
        return [];
    }
    // 创建一个集合，将所有的数据填进去
    let set =  new Set();
    for(let i = 0 ; i < nums.length; i++){
        set.add(nums[i]);
    }
    // 创建一个新的数组，用于存放结果区间
    let arr = [];
    // 先将第一个数推进数组
    arr.push(nums[0]);
    for(let i = 0 ; i < nums.length ; i++){
        // 如果第一个数的后一个数存在在集合中继续循环，如果不存在将此刻的数推入数组，
        if(!set.has(nums[i]+1)){
            arr.push(nums[i]);
            // 并将下一个数推入数组作为区间开始
            if(nums[i+1] !==undefined) arr.push(nums[i+1]);
        }
    }
    // 创建结果数组
    let res = [];
    for(let i = 0 ; i < arr.length ; ){
        // 成对的两个数为一个区间,如果两数相等就将一个变为字符串推入数组,如果不相等,使用模板字符串将两数按规定格式使用模板字符串推入数组
        if(arr[i] === arr[i+1]){
            res.push(arr[i].toString());
        }else{
            res.push(`${arr[i]}->${arr[i+1]}`);
        }
        i = i + 2;
    }
    return res;
};