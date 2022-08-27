/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let stack = []
    for(let i = 0; i < ops.length; i++){
        if(ops[i] == '+') {
            let a = stack[stack.length - 1]
            let b = stack[stack.length - 2]
            stack.push(a + b)
        }else if(ops[i] == 'D'){
            let a = stack[stack.length - 1]
            stack.push(2 * a)
        }else if(ops[i] == 'C'){
            stack.pop()
        }else{
            stack.push(Number(ops[i]))
        }
    }
    let sum = 0;
    while(stack.length){
        sum += stack.pop()
    }
    return sum
};