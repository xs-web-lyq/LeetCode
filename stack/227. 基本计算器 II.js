/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    let num = [];
    let ops = [];
    s += '@'
    for(let i = 0 , n = 0; i < s.length; i++){
        if(s[i] == ' ') continue;
        if(level(s[i]) == 0){
            n = n * 10 + Number(s[i]);
            continue;
        }
        num.push(n);
        n = 0;

        while(ops.length && level(ops[ops.length - 1]) >= level(s[i])){
            let b = num.pop();
            let a = num.pop();
            num.push(calc(a , ops.pop(), b));
        }
        ops.push(s[i])
    }

    return num.pop()
};


function level(s){
    switch(s){
        case '@':
            return -1
        case '-':
        case '+':
            return 1;
        case '*':
        case '/':
            return 2;
    }
    return 0
}

function calc(a, ops , b){
    switch(ops){
        case '-': return a - b;
        case '+': return a + b;
        case '*': return a * b;
        case '/': return Math.floor(a / b);
    }
}


