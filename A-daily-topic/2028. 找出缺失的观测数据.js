/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
 var missingRolls = function(rolls, mean, n) {
    let sum = mean * (n+rolls.length);
    let deficiency = sum;
    for(let i = 0 ; i < rolls.length; i++){
        deficiency -= rolls[i];
    }
    if(deficiency/n > 6 || deficiency < n){
        return [];
    }
    let res = [];
    let a = Math.floor(deficiency / n), b = deficiency % n;
    for(let i = 0; i < n ; i++){
        i < b ? res.push(a + 1) : res.push(a);
    }

    return res;
};