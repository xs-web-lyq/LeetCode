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

```js
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

### 66题：加一

##### 方法一：逆序循环遍历数组

// 从 digits.length-1 向前遍历：如果等于9则将此位置数改为0；如果不等于9则将此位置数加一 并返回数组 digits  ;  若遍历到下标为0时仍为9 则在数组前插入1，时间复杂度为O(n);空间复杂度为O（1）



```
/**

 \* @param {number[]} digits

 \* @return {number[]}

 */

var plusOne = function(digits) {



  for(var i = digits.length-1;i>=0;i--){

​    if(digits[i] !== 9){

​      digits[i]++;

​      return  digits

​    }else{

​      digits[i]=0;

​    }

  }

  // digits.unshift(1)

  // return digits



  // 使用扩展运算符插入1

  return [1,...digits]

};


```





##### 方法二：js特殊方法

//  首先使用数组方法join('')使digits中的元素无分割拼接在一起为字符串，在使用parseInt函数将字符串转化为数字赋值给number； 对数字number 进行加一， 使用toStrong()方法将数字转化为字符串，在用split('')分割，在使用map函数遍历分割后的数组将数组中字符元素转化为数字元素

 

```
 /**

 \* @param {number[]} digits

 \* @return {number[]}

 */

var plusOne = function(digits) {

  // 首先使用数组方法join('')使digits中的元素无分割拼接在一起为字符串，在使用parseInt函数将字符串转化为数字；

  let number = parseInt(digits.join(''))

  // 对数字number 进行加一， 使用toStrong()方法将数字转化为字符串，在用split('')分割，在使用map函数遍历分割后的数组将数组中字符元素转化为数字元素

  let result = (number + 1).toString().split('').map(n=>Number(n))

  return result

};
```

#### 350 两个数组的交集

##### 方法一：

// 以数组的形式返回两数组的交集，在不知道数组是否有序的前提下，参考其他大佬解法，使用Map()去构造hash表，将nums1数组构建成hash表，用于记录数组各项值和对应值所出现的个数。最后在循环遍历nums2,通过Map()的set(),get(),delete(),方法对hash表中的数据进行处理，同时将交集元素添加到result数组中。



```
/**

 \* @param {number[]} nums1

 \* @param {number[]} nums2

 \* @return {number[]}

 */

var intersect = function(nums1, nums2) {

  if(nums1.length > nums2.length){

​    return intersect(nums2,nums1)

  }



  // 创建hashmap存储nums1中的数据key存储值，count存储key值响应的个数

  const hashmap = new Map();

  for(let num of nums1){

​    // 获得num在hashmap中的个数

​    let count = hashmap.get(num) || 0;

​    // 创建或更新num的个数

​    hashmap.set(num,count+1);

  }



  // 创建result结果数组，index为下标

  let result=[],index = 0;

  for(let num of nums2){

​    let count = hashmap.get(num) ||0;

​    if(count > 0){

​      result[index++] = num;

​      count--;

​      if(count>0){

​        // 如果此时count大于0,更新num

​        hashmap.set(num,count);

​      }

​      else{

​        // count等于0则删除num

​        hashmap.delete(num)

​      }

​    }

  }

  return result

};
```



##### 方法二：双指针法

// 首先利用sort()排序函数对数组进行升序排序，在设置两个指针info1，info2。分别指向nums1的下标为1的位置，和nums2的下标为2的位置。设置res结果数组，通过while循环，循环结束条件为（info1<nums1.length && info2<nums2.length）

// 当nums1[info1] < nums2[info2] info1++;

// 当nums1[info1]>nums2[info2] info2++;

// 相等时，将nums1[info1]和nums2[info2]任意值赋给res



```
/**

 \* @param {number[]} nums1

 \* @param {number[]} nums2

 \* @return {number[]}

 */

var intersect = function(nums1, nums2) {

  // 对nums1,nums2进行升序排序

  nums1.sort((a,b)=>a-b)

  nums2.sort((a,b)=>a-b)

  // 定义res结果数组，info1为nums1指针，info2为nums2的指针，index为结果数组的下标

  let res = [],info1=0,info2=0,index=0;

  while(info1<nums1.length && info2<nums2.length){

​    if(nums1[info1] < nums2[info2]){

​      info1++

​    }

​    else if(nums1[info1]>nums2[info2]){

​      info2++

​    }

​    else{

​      res[index++] = nums2[info2];

​      info1++;

​      info2++;

​    }

  }

  return res

};
```

### 283题：移动零
##### 解法一-双指针法：
左指针left 与 右指针right ,左指针在遍历过程中指向位置为零前面都是非零数，右指针在遍历过程中遍历一遍数组，前面到left都是0

```
/**

- @param {number[]} nums
- @return {void} Do not return anything, modify nums in-place instead.
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
```

##### 解法二 ：原地遍历数组法：
遍历一遍数组nums,将nums数组中的非零数依次赋值到nums数组前用index记录非零数最大下标，最后在使用for循环，补全nums数组剩余的0

[
  ](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2ba4i/)

### 206题-反转链表

// ### 解题思路

// ##### 双指针法：

// left 左指针 ，right 右指针，



// 因为再反转后头节点的next指向为null，所以初始化 left = null; right = head;

// 通过while循环当right为null时结束循环， 因为在每次循环时都会将right.next 指向 left ,导致right原来的next丢失，所有使用中间指针info保存 right.next 的值 ,最后将left和right同时向后移动。

// 循环结束时right指向null,所以将left指针给head.并返回head



// ### 代码

```
/**

 \* Definition for singly-linked list.

 \* function ListNode(val, next) {

 \*   this.val = (val===undefined ? 0 : val)

 \*   this.next = (next===undefined ? null : next)

 \* }

 */

/**

 \* @param {ListNode} head

 \* @return {ListNode}

 */

var reverseList = function(head) {

  let left = null;

  let right = head;

  while(right){

​    const info = right.next;

​    right.next = left;

​    left = right;

​    right = info;

  }

  head = left;

  return head;

};
```



