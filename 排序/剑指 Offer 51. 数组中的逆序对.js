/**
 * @param {number[]} nums
 * @return {number}
 */
 let temp = []
 function countResult(arr, l ,r){
     // 当递归到只有一个数时，返回0
     if(l >= r) return 0;
     // 使用ans 记录每次递归后的逆序数
     let ans = 0, mid = Math.floor((l + r) / 2);
     // 将左右分块里的逆序数加到ans上
     ans += countResult(arr, l , mid);
     ans += countResult(arr, mid + 1 , r);
     // 进行归并排序
     let k = l , p1 = l , p2 = mid + 1;
     while(p1 <= mid || p2 <= r){
         if((p2 > r) || (p1 <= mid && arr[p1] <= arr[p2])){
             temp[k++] = arr[p1++];
         }else{
             // 当有子数组的数小于左子数组的数时-说明左子数组后面的数都比此时的数大，说明有这么多的逆序数
             temp[k++] = arr[p2++];
             ans += (mid - p1 + 1);
         }
     }
     // 将排好的数组赋值给原数组
     for(let i = l ; i <= r; i++){
         arr[i] = temp[i]
     }
     // 返回次层递归的逆序数
     return ans;
 }
 
 var reversePairs = function(nums) {
     let len = nums.length;
     while(len--) temp.push(0)
     // console.log(temp)
     return countResult(nums, 0 , nums.length - 1);
 };