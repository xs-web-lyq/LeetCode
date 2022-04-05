/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
    let count = 0;
    for(left ; left <= right; left++){
        let count1 = 0;
        let n = left;
        let isOne = 1;
        while(n){
            isOne = n % 2;
            n = Math.floor(n/2);
            if(isOne === 1){
                count1++;
            }
        }
        if(isPrime(count1)){
            count++;
        }
    }
    return count;
};
function isPrime(count1){
    if(count1===1) return false;
    for(let i = 2; i < count1; i++){
        if(count1 % i === 0){
            return false;
        }
    }
    return true;
}

