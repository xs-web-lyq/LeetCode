/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    let res = [];
    let res1 = [];
    let set = new Set();
    let str = 'AEIOUaeiou';
    for(let i = 0 ; i <str.length;i++ ){
        set.add(str[i])
    }
    sentence.split(' ');
    res = sentence.split(' ')

    for(let i = 0 ; i < res.length ;i++){
        if(isVowel(res[i],set)){
            let info = res[i];
            info += 'ma';
            for(let j = 0; j <= i; j++){
                info += 'a';
            }
            res1.push(info);
        }else{
            let info = res[i];
            info = info.slice(1) + info.slice(0,1) + 'ma';
            for(let j = 0; j <= i; j++){
                info += 'a';
            }
            res1.push(info);
        }
    }

    return res1.join(' ')
};
function isVowel(n,set){
    if(set.has(n[0])){
        return true;
    }
    return false;

}