// 66题：加一
// 方法一：逆序循环遍历数组
// 从 digits.length-1 向前遍历：如果等于9则将此位置数改为0；如果不等于9则将此位置数加一 并返回数组 digits   ;   若遍历到下标为0时仍为9 则在数组前插入1，时间复杂度为O(n);空间复杂度为O（1）
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    for(var i = digits.length-1;i>=0;i--){
        if(digits[i] !== 9){
            digits[i]++;
            return  digits
        }else{
            digits[i]=0;
        }
    }
    // digits.unshift(1)
    // return digits

    // 使用扩展运算符插入1
    return [1,...digits]
};


// 方法二：js特殊方法
//  首先使用数组方法join('')使digits中的元素无分割拼接在一起为字符串，在使用parseInt函数将字符串转化为数字赋值给number； 对数字number 进行加一， 使用toStrong()方法将数字转化为字符串，在用split('')分割，在使用map函数遍历分割后的数组将数组中字符元素转化为数字元素
 
 /**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 首先使用数组方法join('')使digits中的元素无分割拼接在一起为字符串，在使用parseInt函数将字符串转化为数字；
    let number = parseInt(digits.join(''))
    // 对数字number 进行加一， 使用toStrong()方法将数字转化为字符串，在用split('')分割，在使用map函数遍历分割后的数组将数组中字符元素转化为数字元素
    let result = (number + 1).toString().split('').map(n=>Number(n))
    return result
};