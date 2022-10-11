// function quick_sort_vl(arr , l , r){
//     if(l >= r) return;
//     let x = l, y = r, base = arr[l];
//     while(x < y){
//         while(x < y && arr[y] >= base) y--;
//         if(x < y) arr[x++] = arr[y];
//         while(x < y && arr[x] < base) x++;
//         if(x < y) arr[y--] = arr[x]
//     }
//     arr[x] = base;
//     quick_sort_vl(arr, l, x - 1);
//     quick_sort_vl(arr, x + 1, r);
// }

let arr = [1,4,5,8,4,2,5,6,4,2,15,6,8];
quick_sort_vl(arr,0,arr.length-1);
console.log(arr)
function quick_sort_vl(arr , l , r){
   while(l < r){
        let x = l, y = r, base = arr[l];
        while(x < y){
            while(x < y && arr[y] >= base) y--;
            if(x < y) arr[x++] = arr[y];
            while(x < y && arr[x] < base) x++;
            if(x < y) arr[y--] = arr[x]
        }
        arr[x] = base;
        quick_sort_vl(arr, x + 1, r);
        r = x - 1;
   }


}