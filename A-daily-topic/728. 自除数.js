/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let res = [];
    for(let i = left ;i <= right; i++){
        if(divisor(i)){
            res.push(i);
        }
    }
    return res;
};
var divisor = function(n){
    let m = n;
    let str = n.toString();
    for(let i = 0 ; i < str.length; i++){
        if(m % Number(str[i]) !== 0){
            return false;
        }
    }
    return true;
}