解法一：异或
这个解法正是太奇妙了，数组内数据通过异或操作将两两相同的都通过异或运算变成0，最后剩余一个和0进行异或得到自身。被大佬新奇的解法所折服第一天

```
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
```

方法二：Set集合
遍历数组nums，通过向集合中添加，删除操作，最终使集合中剩余目标数据
最后使用set.forEach方法取出目标元素，并输出

```
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
```