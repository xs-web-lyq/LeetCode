/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 三指针排序， 因为中间值唯一
function three_partition(arr, l, r, mid){
    //  当 l 大于等于 r  直接返回
     if(l >= r) return ;
    // x 左侧记录 0  y 右侧记录 2 ，将x , y 超出数组，保证如果没有这两个颜色不会出现问题
     let x = -1, y = r + 1, i = l;
     while(i < y){
         if(arr[i] == mid){
             i++
         } else if(arr[i] < mid){

             x++;
             [arr[i],arr[x]] = [arr[x],arr[i]];
             i++
         } else if(arr[i] > mid){
             y--;
             [arr[i],arr[y]] = [arr[y],arr[i]];
         }
     }
 }
var sortColors = function(nums) {
    three_partition(nums, 0 , nums.length - 1,1)
    return nums;
};