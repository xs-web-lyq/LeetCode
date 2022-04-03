/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
    let arr = [];
    for(let i = 0 ; i < dictionary.length; i++){

        let t = dictionary[i];
        let left1 = 0 , left2 = 0;
        for(let j = 0 ; j < s.length ; j++){
            if(t[left1] === s[left2]){
                left1++;
                left2++;
            }else{
                left2++;
            }
        }
        if(left1 === t.length) arr.push(t);
    }
    let res = '';
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].length > res.length){
            res = arr[i];
        }
    }
    let arr1 = [];
   for(let i = 0 ; i < arr.length ; i++){
       if(res.length == arr[i].length){
           arr1.push(arr[i]);
       }
   }
   if(arr1.length == 0){
       return "";
   }
   console.log(arr1);
    let res2 = arr1[0];
    for(let i = 1 ; i < arr1.length; i++){
        for(let j = 0 ; j < res2.length; j++){
            if(res2[j].charCodeAt() > arr1[i][j].charCodeAt()){
                res2 = arr1[i];
                break;
            }
            else if (res2[j].charCodeAt() < arr1[i][j].charCodeAt()){
                break;
            }
        }
        console.log(res2);
    }
  
    return res2;
};