/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    let set1 = new Set();
    let set2 = new Set();
    let res = [[],[]]
    for(let i = 0 ; i < nums1.length; i++){
        set1.add(nums1[i]);
    }
    for(let i = 0 ; i < nums2.length; i++){
        set2.add(nums2[i]);
    }
    set2.forEach((val)=>{
        if(set1.has(val)){
            set1.delete(val);
        }else{
            res[1].push(val);
        }
    })
    set1.forEach((val)=>res[0].push(val));
    return res;
};