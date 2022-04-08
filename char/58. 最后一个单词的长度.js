/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    let arr = s.split(' ');
    let len = arr.length-1;
    while(len>=0){
        if(arr[len].length !== 0){
            return arr[len].length;
        }
        len--;
    }
};