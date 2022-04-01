/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let arr1 = map(s);
    let arr2 = map(t);
    if(arr1.toString() === arr2.toString()){
        return true;
    }
    return false;
    
};
function map(str){
    let count = 1;
    let arr = [];
    let map = new Map();
    for(let i = 0 ; i < str.length; i++){
        if(!map.has(str[i])){
            map.set(str[i],count);
            arr.push(count);
            count++;
        }else{
            arr.push(map.get(str[i]));
        }
    }
    return arr;
}