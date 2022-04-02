/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    let len = Math.max(arr1.length,arr2.length);
    for(let i = 0 ; i < len; i++){
        if(arr1[i] === undefined) arr1[i] = 0;
        if(arr2[i] === undefined) arr2[i] = 0;
        if(Number(arr1[i]) > Number(arr2[i])){
            return 1;
        }
        else if (Number(arr1[i]) < Number(arr2[i])){
            return -1;
        }
    }
    return 0;
};