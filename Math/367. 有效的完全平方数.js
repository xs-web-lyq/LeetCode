/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    let res = Math.sqrt(num);
    res % 1 === 0 ? res = true : res = false;
    return res;
};