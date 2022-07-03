/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    const set = new Set();
    for(let item of nums){
        if(set.has(item)){
            return item;
        }else{
            set.add(item);
        }
    }
    return null
};