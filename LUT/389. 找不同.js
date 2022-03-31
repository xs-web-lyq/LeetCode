/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i])){
            map.set(s[i],map.get(s[i]) + 1);
        }else{
            map.set(s[i],1);
        }
    }
    for(let i = 0 ; i < t.length; i++){
        if(map.get(t[i])){
            map.set(t[i],map.get(t[i]) - 1);
        }else{
            return t[i];
        }
    }
    
};