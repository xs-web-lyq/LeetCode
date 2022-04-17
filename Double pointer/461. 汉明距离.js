/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let count = 0;
    let x1 = [],y1 = [];
    while(x){
        let info = x % 2;
        x = Math.floor(x / 2);
        x1.unshift(info);
    }
    while(y){
        let info = y % 2;
        y = Math.floor(y / 2);
        y1.unshift(info);
    }
    let right1 = x1.length - 1;
    let right2 = y1.length - 1;

    while(right1 >= 0 || right2 >= 0){
        let a = x1[right1] ? 1 : 0;
        let b = y1[right2] ? 1 : 0;
        if(a !== b) count++;
        right1--;
        right2--;
    }
    return count;
};