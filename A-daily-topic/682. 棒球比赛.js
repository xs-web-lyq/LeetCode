/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let res = [];
    for(let i = 0 ; i < ops.length; i++){
        if(ops[i] !== "C" && ops[i] !== "D" && ops[i] !== "+" ){
            res.push(Number(ops[i]));
        }
        else if(ops[i] === "C"){
            res.pop();
        }
        else if(ops[i] === "D"){
            res.push(res[res.length-1]*2);
        }else{
            res.push(res[res.length-1] + res[res.length-2]);
        }
    }
    let sum = 0;
    for(let i = 0 ; i < res.length; i++){
        sum += res[i];
    }
    return sum;
};