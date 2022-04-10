/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const map = new Map();
    let str = "abcdefghijklmnopqrstuvwxyz";
    let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    for(let i = 0 ; i < str.length ; i++){
        map.set(str[i],arr[i]);
    }
    let set = new Set();
    for(let i = 0 ; i < words.length; i++){
        let str1 = "";
        for(let j = 0 ; j < words[i].length ; j++){
            str1 += map.get(words[i][j]);
        }
        set.add(str1);
        console.log(set);
    }  
    let len = 0; 
    set.forEach(() => len++)
    
    return len;
};