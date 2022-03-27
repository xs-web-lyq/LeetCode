/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let info = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            info++;
        }else{
            max = Math.max(info,max);
            info = 0;
        } 
    }
    max = Math.max(info , max);
    return max;
};