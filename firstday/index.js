// <!-- 方法一，异或 -->
/**

@param {number[]} nums
@return {number}
*/
var singleNumber = function(nums) {
let src = nums[0];
if(nums.length>1){
for(let i = 1;i<nums.length;i++){
src ^= nums[i];
}
}
return src
};


// <!-- 方法二，set集合 -->
/**

@param {number[]} nums
@return {number}
*/
var singleNumber = function(nums) {
let set = new Set();
let src
for(let i = 0; i<nums.length;i++){
if(set.has(nums[i])){
set.delete(nums[i])
}
else{
set.add(nums[i])
}
}
// 遍历set集合
set.forEach((item)=>{
src = item
})
return src
};