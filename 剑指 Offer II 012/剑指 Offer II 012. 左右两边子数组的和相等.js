/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {

    var flag = -1;
    var sum = 0;
    for(let i = 0; i <nums.length; i++){
        sum += nums[i];
    }
    var left = 0, right = sum - nums[0];
    for(let i = 0; i < nums.length; i++){
        if(left==right){
            flag = i;
            break;
        }else{
            left = left + nums[i];
            right = right - nums[i+1];
        }
    }
    return flag;
};
console.log();