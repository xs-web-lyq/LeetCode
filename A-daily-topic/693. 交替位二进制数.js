/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    let prev = 2;
    let cur = 2;
    while(n){
        cur = n % 2;
        if(prev === cur){
            return false;
        }
        prev = cur;
        n = Math.floor(n / 2);

    } 
    return true;
};