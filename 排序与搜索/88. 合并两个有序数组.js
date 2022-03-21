/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    if(n == 0){return nums1}
    if(m == 0){
        for(let i = 0; i < nums1.length; i++){
            nums1[i] = nums2[i];
        }
        return nums1;
    }
    let res = [];
    let left1 = 0, left2 = 0;
    while(left1 < m && left2 < n){
        if(nums1[left1] <= nums2[left2]){
            res.push(nums1[left1]);
            left1++;
        }else{
            res.push(nums2[left2]);
            left2++;
        }
    }
   
    if(left1 < m){
        for(left1 ; left1 < m; left1++){
            res.push(nums1[left1]);
        }
    }
    if(left2 < n){
        for(left2 ; left2 < n ; left2++){
            res.push(nums2[left2]);
        }
    } 
    for(let i = 0; i < nums1.length; i++){
        nums1[i] = res[i];
    }

    return nums1;
};