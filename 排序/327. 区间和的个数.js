/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
//  和前缀和数组等大小的辅助数组
let temp = []

// 计算符合区间和范围的函数
function mergeSort(sum , l , r , lower, upper){
    // 当递归到只有一个数的时候返回 0 ；
    if(l >= r) return 0;
    // 计算下标中间数， ans记录符合条件区间和个数
    let mid = Math.floor((l + r) / 2) , ans = 0;
    // 递归左数组，递归右数组
    ans += mergeSort(sum,l , mid , lower , upper);
    ans += mergeSort(sum , mid + 1 , r , lower , upper);
    // 计算左右数组之间符合条件的区间和
    ans += countTwoPart(sum, l , mid , mid + 1 , r , lower, upper);
    // 归并排序
    let k = l , p1 = l , p2 = mid + 1;
    while(p1 <= mid || p2 <= r){
        if((p2 > r) || (p1 <= mid && sum[p1] <= sum[p2])){
            temp[k++] = sum[p1++]
        }else{
            temp[k++] = sum[p2++]
        }
    }
    // 将排序结果复制到原数组
    for(let i = l; i <= r; i++) {
        sum[i] = temp[i];
    }
    // 返回符合条件的区间和个数
    return ans;
}

// 计算左右数组之间符合条件的区间和

function countTwoPart(sum , l1 , r1 , l2 , r2, lower , upper){
    // k1 记录第一个大于等于sum[j] - upper 的下标前一个
    // k2 记录第一个个小于等于sum[j] - lower 的下标
    let ans = 0 , k1 = l1 , k2 = l1;
    // 根据归并有序性，可以
    for(let j = l2; j <= r2; j++ ){
        let a = sum[j] - upper;
        let b = sum[j] - lower;
        while(k1 <= r1 && sum[k1] < a) k1 += 1;
        while(k2 <= r1 && sum[k2] <= b) k2 += 1;
        // 符合条件的区间和就是 k2 - k1的个数
        ans += k2 - k1;
    }
    return ans;
    
}
var countRangeSum = function(nums, lower, upper) {
    // 填充辅助数组
    while(temp.length <=nums.length) temp.push(0)
    // 将前缀和第一个数填充为0
    let sum = [0];
    // 计算前缀和
    for(let i = 0 ; i < nums.length ;i++) sum[i + 1] = nums[i] + sum[i];
    // 调用 mergeSort函数进行递归区间和
    return mergeSort(sum,0,sum.length-1,lower,upper);
};