/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let set = new Set();
    for(let i = 1 ; i <= nums.length ; i++){
        set.add(i);
    }
    let res = []
    for(let i = 0 ; i < nums.length; i++){
        set.delete(nums[i]);
    }
    set.forEach((val) => res.push(val));
    return res;
};