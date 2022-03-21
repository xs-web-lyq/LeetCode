/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let sum = 0;
    while(n){
        // 位运算，一次可以将最末端的1,变为0
        n &= n - 1;
        sum ++;
    }
    return sum;
};