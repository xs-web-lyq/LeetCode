/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    while(num>9){
        let n = num;
        num = 0;
        while(n){
            let info = n % 10;
            num += info;
            n = Math.floor(n / 10);
        }
    }
    return num;

};