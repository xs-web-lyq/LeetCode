/**
 * @param {number[]} nums
 * @return {number}
 */
 var findClosestNumber = function(nums) {
    let res = []
    for(let i = 0 ; i < nums.length; i++){
         res.push((nums[i]));
    }
    res.sort((a,b) => a - b)
    let res1 = [];
    let res2 = []
    
    for(let i = 0 ; i < nums.length ; i++){
        if(res[i] < 0){
            res1.unshift(res[i])
        }
        else if(res[i] === 0){
            return 0;
        }
        else{
            res2.push(res[i]);
        }
    }
    let res3 = [];
    if(res1[0]) res3.push(res1[0]);
    if(res2[0]) res3.push(res2[0]);
    if(res3.length === 1){
        return res3[0]
    }
    if(Math.abs(res1[0]) >= res2[0]){
        return res2[0]
    }
    if(Math.abs(res1[0]) < res2[0]){
        return res1[0]
    }

};