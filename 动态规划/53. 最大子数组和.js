/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // per 用于更改原数组当前位置前的连续和与当前值的最大值，max记录per变化过程中最大值；
    let per = 0, max = nums[0];
    nums.forEach((x) =>{
        // 如果当前值per为小于零的数，则丢弃当前位置之前的部分，如果是大于零则继续将当前位置的值加到per上归入连续子数组中此时的per即为此刻连续子数组的最大值。
        per = Math.max(per + x , x);
        // max用来记录per在遍历过程中的最大值。即为答案。
        max = Math.max(max,per);
    })
    return max;
};