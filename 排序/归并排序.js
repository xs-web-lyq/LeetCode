
function merge_sort(arr, l , r){
    if(l >= r) return ;
    let mid = Math.floor((r + l) / 2);
    let temp = [];
    merge_sort(arr , l ,mid);
    merge_sort(arr , mid + 1, r);
    let k = 0, p1 = l, p2 = mid + 1;
    while(p1 <= mid || p2 <= r){
        if(p2 > r || (p1 <= mid && arr[p1] < arr[p2])){
            temp[k++] = arr[p1++]
        }else{
            temp[k++] = arr[p2++];
        }

    }
    for(let i = l; i <= r; i++){
        arr[i] = temp[i - l]
    }
    return ;

}


let arr = [1,5,3,6,8,2,5,8,1,9,54,36,21,54];
merge_sort(arr,0,arr.length - 1)
console.log(arr)