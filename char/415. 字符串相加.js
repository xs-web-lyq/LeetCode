/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let right1 = num1.length - 1;
    let right2 = num2.length - 1;
    let flag = 0;
    let res = [];
    while(right1 >= 0 || right2 >= 0 || flag){
        let a = num1[right1] ? Number(num1[right1]) : 0;
        let b = num2[right2] ? Number(num2[right2]) : 0;
        if(a + b + flag > 9){
            let info = ( a + b + flag ) % 10;
            res.unshift(info);
            flag = 1;
        }else{
            res.unshift(a+b+flag);
            flag = 0;
        }
        right1--;
        right2--;
    }
    return res.join('')
};