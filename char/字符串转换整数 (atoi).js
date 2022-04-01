/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    var s1 = s.trim();
    var str = "";
    if(!s1){return 0}
    if(s1[0] == '+'  || s1[0] == '-' || one(s1[0])){
        str += s1[0];
    }else{
        return 0;
    }
    for(var i = 1; i<s1.length;i++){
        if(one(s1[i])){
            str += s1[i];
        } else{
            if(str == '-' || str == '+'){
                return 0;
            }
            if (Number(str) < -2147483648){
                return -2147483648;
            }else if(Number(str) > 2147483647){
                return 2147483647;
            }else{
                return Number(str);
            }
            
        }
    }
    if(str == '-' || str == '+'){
            return 0;
    }
    if( Number(str)<-2147483648){
        return -2147483648;
    }else if(Number(str)>2147483647){
        return 2147483647;
    }else{
        return Number(str);
    }
}
function one(str1){
    if((str1.charCodeAt() <= 57 && str1.charCodeAt() >= 48)){
        return str1;
    }else{
        return 0;
    }
}