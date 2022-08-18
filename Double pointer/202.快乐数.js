/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {

    // 因为n 的下一个平方数都是唯一的，如果是快乐数，最后一个就是1，如果不是就会出现循环
    // 类比链表，1相等于null, 循环相当于，循环链表

    // 使用快慢指针对数进行循环取值，判断是否有环
    let p = q = n;
    do{
        p = getNext(p)
        q = getNext(getNext(q))
        // 快指针为1 时相当于节点为null
    }while(p !== q && q != 1)
    // 返回快指针为是否为1
    
    return q == 1

};

// 设置函数获得下一个平方数
function getNext(x){
    let z = 0;
    while(x){
        z += (x % 10) * (x % 10)
        x = Math.floor(x / 10)

    }
    return z
}