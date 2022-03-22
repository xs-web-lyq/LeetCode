/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let Sum = 0;
    // 将数组遍历一遍，求数组的和。
    for(let i = 0; i < nums.length; i++){
        Sum += nums[i];
    }
    let Add = 0;
    // 重新遍历一遍数组，如果遍历到的数组之和的二倍加上当前的数的和等于数组和，则此时的下标就是中心下标。
    for(let i = 0; i < nums.length; i++){
        if((2*Add + nums[i]) == Sum){
            return i;
        }
        Add += nums[i];
    }
    return -1;
};