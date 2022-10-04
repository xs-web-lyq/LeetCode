/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 function getmid(a,b,c){
    if(a > b) [a,b] = [b,a];
    if(a > c) [a,c] = [c,a];
    if(b > c) [b,c] = [c,b];
    return b;
}

function quick_select(arr , l , r ,k){
    if(l >= r) return ;
    let x = l , y = r, mid = getmid(arr[l],arr[Math.floor((l + r) / 2)], arr[r]);
    do {
        while(arr[x] < mid) x++;
        while(arr[y] > mid) y--;
        if(x <= y){
            [arr[x],arr[y]] = [arr[y],arr[x]];
            x++;
            y--;
        }

    }while(x <= y);
    if(y - l == k - 1) return ;
    if(y - l >= k){
        quick_select(arr,l,y,k);
    }else{
        quick_select(arr,x,r,k-x+l)
    }
    return ;

}
var smallestK = function(arr, k) {
  quick_select(arr,0 , arr.length - 1, k);
  return arr.slice(0,k)
};