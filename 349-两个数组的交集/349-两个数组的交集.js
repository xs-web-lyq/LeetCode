// ### 解题思路
// 因为最终输出数组不能出现重复元素，所以，首先 通过Set()对num1进行去重，在使用 ... 扩展运算符 将去重后集合元素 放入数组，在使用数组的filter()方法对筛选后的数组num1进行筛选。筛选条件为，将nums2转为集合后其中存在的元素。。。。最后返回即可。。。。js 的内置方法简直了。。。。由于此方法的运行效率过低。

// 所以直接对nums2进行includes()方法判断。。。可以提高代码效率。。。时间复杂度为O(m*n),空间复杂度O(m),m为nums1集合长度。。。

// ### 代码


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // 首先将两数组进行去重
    // <!-- return [...new Set(nums1)].filter(item => new Set(nums2).has(item)) -->
    return [...new Set(nums1)].filter(item => nums2.includes(item))
};