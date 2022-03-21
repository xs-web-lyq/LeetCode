/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    // 使用双指针
    let len = nums.length;
    let left = 0;
    // 双指针，当right 指针指向值不等于val 则两指针同时向后移动，当right 指针指向等于val值时，left 指针停在val值处，right指针继续向后遍历直到遍历到不为val的地方 将right值赋给left值，并将两指针同时向后移动。。。
    for(let right = 0; right < len; right++){
        if(nums[right] !== val){
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};