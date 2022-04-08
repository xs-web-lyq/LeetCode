/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let map = new Map();
    let arr = [];
    let count = 1;
    for(let i = 0 ; i < pattern.length ; i++){
        if(map.get(pattern[i])){
            arr[i] = map.get(pattern[i]);
        }else{
            map.set(pattern[i],count);
            arr[i] = count;
            count++;
        }
    }
    let str = s.split(' ');
    let map1 = new Map();
    let arr1 = [];
    count = 1;
    for(let i = 0 ; i < str.length ; i++){
        if(map1.get(str[i])){
            arr1[i] = map1.get(str[i]);
        }else{
            map1.set(str[i],count);
            arr1[i] = count;
            count++;
        }
    }
    if(arr.toString() === arr1.toString()){
        return true;
    }
    return false;

};