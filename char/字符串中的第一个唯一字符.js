/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const map = new Map();
    for(var i = 0; i<s.length;i++){
        map.get(s[i]) ? map.set(s[i],map.get(s[i])+1) : map.set(s[i],1);
    }
    for(var i = 0; i<s.length;i++){
        if(map.get(s[i])===1){
            return i;
        }
    }
    return -1;
};