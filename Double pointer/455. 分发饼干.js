/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    g.sort((a,b)=>{return a - b})
    s.sort((a,b)=>{return a - b})
    let sum = 0;
    let left1 = 0 , left2 = 0 ;
    while(left1<s.length){
        if(s[left1] >= g[left2]){
            sum++;
            left1++;
            left2++;
        }else{
            left1++;
        }
    }
    return sum;
};