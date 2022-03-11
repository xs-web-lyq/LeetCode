/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let str = '';
    for(let i=0;i<s.length;i++){
        if((s[i].charCodeAt()>=97 && 122 >= s[i].charCodeAt()) || (s[i].charCodeAt()>=65 && 90>=s[i].charCodeAt() ) || (s[i].charCodeAt()>=48 && s[i].charCodeAt()<=57) ){
            str += s[i];
        }
    }
    str = str.toLocaleLowerCase();
    console.log(str);
    for(var i = 0, j = str.length-1; i < j;) {
        if(str[i] == str[j]) i++, j--;
        else return false
    }
    return true;
};