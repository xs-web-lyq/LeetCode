/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    let str = '';
    for(let i = 0 ; i < paragraph.length ; i++){
        str += paragraph[i].toLocaleLowerCase();
    }
    let arr = [] , word = ''

    // 将单词进行筛选
    for(var i of str) {
        if(isCan(i)) {
            word += i
        }
        else if(i === ',' || i === ' ') {
            if(word !== '') arr.push(word)
            word = ''
        }
    }
    
    arr.push(word)
    let map = new Map()
    for(let i = 0 ; i < arr.length ; i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
    }

    for(let i = 0 ; i < banned.length; i++){
        map.delete(banned[i]);
    }
    let res1 ;
    let count1 = 0;
    map.forEach((val,key)=>{
        if(val > count1){
            count1 = val;
            res1 = key;
        }
    })
    return res1;
};

function isCan(n){
    return  n.charCodeAt() >= 97 && n.charCodeAt() <= 122
}