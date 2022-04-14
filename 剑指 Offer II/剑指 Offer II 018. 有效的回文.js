/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let str = '';
    for(let i = 0 ; i < s.length ; i++){
        if(( 48 <= s[i].charCodeAt() && s[i].charCodeAt() <= 57) ||  ( 65 <= s[i].charCodeAt() && s[i].charCodeAt() <= 90) || ( 97 <= s[i].charCodeAt() && s[i].charCodeAt() <= 122)){
            str += s[i];
        }
    }
    let left = 0 , right = str.length - 1;
    while(left <= right){
        if(str[left].toLocaleLowerCase() !== str[right].toLocaleLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
};
