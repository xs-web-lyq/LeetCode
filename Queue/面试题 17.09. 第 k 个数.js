/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
    let arr = [1]
    // p3代表乘以 因子 3 所在的当前索引位置
    let p3 = 0, p5 = 0, p7 = 0;
    let n = k
    while(--n){
        // 找到现在索引所在位置乘以相应因子的乘积最小值
        let ans = 3 * arr[p3]
        ans = Math.min(ans, 5 * arr[p5])
        ans = Math.min(ans, 7 * arr[p7])
        // 将选中的最小值对应因子索引向后移动
        if(ans == 3 * arr[p3]) p3++
        if(ans == 5 * arr[p5]) p5++
        if(ans == 7 * arr[p7]) p7++
        arr.push(ans)
    }
    return arr[k-1]
};