// 暴露破解法：
// 通过两次for循环遍历数组，判断是否符合条件，并返回结果数组

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (var i=0;i<nums.length-1;i++){
        for (var j=i+1;j<nums.length;j++)
        {
            if ((nums[i]+nums[j])==target){
                return [i,j];
            }
        }
    }

};

// 方法二：字典解法

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 字典解法，想象此过程为婚姻介绍所
    const map = new Map()
    for(let i = 0; i<nums.length;i++){
        // 记录来人的信息
        const n = nums[i];
        // 记录期望的理想对象
        const n1 = target - n;
        // 查看字典中是否有理想对象
        if(map.has(n1)){
            // 匹配成功返回两者下标
            return [map.get(n1),i]
        }else{
            // 匹配不成功将来人信息放入字典
            map.set(n,i)
        }
    }

};
