// 283题：移动零
// 解法一-双指针法：
// 左指针left 与 右指针right ,左指针在遍历过程中指向位置为零前面都是非零数，右指针在遍历过程中遍历一遍数组，前面到left都是0
/**

@param {number[]} nums
@return {void} Do not return anything, modify nums in-place instead.
*/
var moveZeroes = function(nums) {
// 双指针法：
let left = 0;
for(let right=0 ; right<nums.length;right++){
if(nums[right] !== 0){
if(left!==right){
let tep = nums[right];
nums[right] = nums[left];
nums[left] = tep;
}
left++;
}
}
return nums
};
// 解法二 ：原地遍历数组法：
// 遍历一遍数组nums,将nums数组中的非零数依次赋值到nums数组前用index记录非零数最大下标，最后在使用for循环，补全nums数组剩余的0

