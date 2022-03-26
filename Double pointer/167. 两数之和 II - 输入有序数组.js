/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let left = 0 , right = numbers.length-1;
    let res = [];
    while(left < right){
        if(numbers[left]+numbers[right] > target){
            right--;
        }
        else if(numbers[left] + numbers[right] < target){
            left++;
        }else{
            res.push(left+1);
            res.push(right+1);
            break;
        }
    }
    return res;

};