/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let left = 1, right = x;
    // 记录结果
    let res = 0;
    // 循环条件，当left > right 时跳出循环
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(mid * mid <= x) {
            res = mid;
            left = mid + 1;
        }
        else right = mid - 1;
    }
    return res;
};