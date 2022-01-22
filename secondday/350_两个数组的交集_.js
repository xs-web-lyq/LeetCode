// 方法一：
// 以数组的形式返回两数组的交集，在不知道数组是否有序的前提下，参考其他大佬解法，使用Map()去构造hash表，将nums1数组构建成hash表，用于记录数组各项值和对应值所出现的个数。最后在循环遍历nums2,通过Map()的set(),get(),delete(),方法对hash表中的数据进行处理，同时将交集元素添加到result数组中。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(nums1.length > nums2.length){
        return intersect(nums2,nums1)
    }

    // 创建hashmap存储nums1中的数据key存储值，count存储key值响应的个数
    const hashmap = new Map();
    for(let num of nums1){
        // 获得num在hashmap中的个数
        let count = hashmap.get(num) || 0;
        // 创建或更新num的个数
        hashmap.set(num,count+1);
    }

    // 创建result结果数组，index为下标
    let result=[],index = 0;
    for(let num of nums2){
        let count = hashmap.get(num) ||0;
        if(count > 0){
            result[index++] = num;
            count--;
            if(count>0){
                // 如果此时count大于0,更新num
                hashmap.set(num,count);
            }
            else{
                // count等于0则删除num
                hashmap.delete(num)
            }
        }
    }
    return result
};
// 方法二：双指针法
// 首先利用sort()排序函数对数组进行升序排序，在设置两个指针info1，info2。分别指向nums1的下标为1的位置，和nums2的下标为2的位置。设置res结果数组，通过while循环，循环结束条件为（info1<nums1.length && info2<nums2.length）
// 当nums1[info1] < nums2[info2] info1++;
// 当nums1[info1]>nums2[info2] info2++;
// 相等时，将nums1[info1]和nums2[info2]任意值赋给res


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 对nums1,nums2进行升序排序
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    // 定义res结果数组，info1为nums1指针，info2为nums2的指针，index为结果数组的下标
    let res = [],info1=0,info2=0,index=0;
    while(info1<nums1.length && info2<nums2.length){
        if(nums1[info1] < nums2[info2]){
            info1++
        }
        else if(nums1[info1]>nums2[info2]){
            info2++
        }
        else{
            res[index++] = nums2[info2];
            info1++;
            info2++;
        }
    }
    return res
};