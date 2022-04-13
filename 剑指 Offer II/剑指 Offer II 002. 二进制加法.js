/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let right1 = a.length - 1;
    let right2 = b.length - 1;
    let flag = 0;
    let res = [];
    while(right1 >= 0 || right2 >= 0 || flag){
        let a1 = a[right1] ? Number(a[right1]) : 0 ;
        let b1 = b[right2] ? Number(b[right2]) : 0 ;
        let info = a1 + b1 + flag;
        if(info >= 2){
            let info1 = info % 2;
            res.unshift(info1);
            flag = 1;
        }else{
            res.unshift(info);
            flag = 0;
        }

        right1--;
        right2--;
    }
    return res.join('');
};