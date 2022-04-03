/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let left1 = 0 , left2 = 0;
    for(let i = 0 ; i < t.length ; i++){
        if(s[left1] === t[left2]){
            left1++;
            left2++;
        }else{
            left2++;
        }
    }
    if(left1 === s.length) return true;
    else return false;
};