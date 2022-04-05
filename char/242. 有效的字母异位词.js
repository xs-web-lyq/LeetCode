/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let map = new Map();
    for(let i = 0 ; i < s.length ; i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        }else{
            map.set(s[i],1);
        }
    }

    for(let i = 0 ; i < t.length; i++){
        if(map.get(t[i]) >= 1){
            map.set(t[i],map.get(t[i])-1);
        }else{
            return false;
        }
    }
    let isTrue = true;
    map.forEach((a)=>{
        if(a!==0){
            isTrue = false;
        }
    })
    return isTrue;
};