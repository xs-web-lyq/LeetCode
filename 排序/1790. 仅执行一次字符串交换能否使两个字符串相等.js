/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
    if(s1 == s2) return true;
    let len = s1.length;
    let arr1 = []
    let arr2 = []
    while(len--){
        if(s1[len] != s2[len]){
            arr1.push(s1[len]);
            arr2.push(s2[len]);
        }
    }
    if(arr1.length !== 2) return false;
    let a1 = arr1.reverse().join('');
    let a2 = arr2.join('')
    if(a1 !== a2) return false;
    return true;
};