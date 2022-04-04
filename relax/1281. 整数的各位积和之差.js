/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let product = 1 , sum = 0;
    while(n){
        product *= n % 10;
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return product - sum;
};