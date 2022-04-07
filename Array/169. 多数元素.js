/**
 * @description 169.多数元素
 * @author 努力哦
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    // let map = new Map();
    // for(let i = 0 ; i < nums.length; i++){
    //     if(map.has(nums[i])){
    //         map.set(nums[i],map.get(nums[i])+1);
    //     }else{
    //         map.set(nums[i],1);
    //     }
    // }
    // let len = Math.floor(nums.length / 2);
    // let res;
    // map.forEach((val,key)=>{
    //     if(val > len){
    //         res = key;
    //     }
    // })
    // return res;

// 摩尔投票法
    let candidate = nums[0];
    let count = 0;
    for(let i = 0 ; i < nums.length; i++){
        if(candidate === nums[i]){
            count += 1;
        }else{
            count--;
        }
         if(count < 0){
            count = 1;
            candidate = nums[i];
        }
    }
    return candidate;
};