// function selectSort(num){
//     for(let i = 0 ; i < num.length - 1;i++){
//         for(let j = i + 1; j < num.length; j++){
//             if(num[i] > num[j]) [num[i],num[j]] = [num[j],num[i]];
//         }
        
//     }

//     console.log(num)
// }


function selectSort(num){
    for(let i = 0 ; i < num.length - 1;i++){
        let index = i
        for(let j = i + 1; j < num.length; j++){
            if(num[index] > num[j]) index = j
        }
        if (index !== i) [num[i], num[index]] = [num[index], num[i]];
    }

    console.log(num)
}

let num = [5,2,6,7,8,6,2,5,24,9]
selectSort(num)