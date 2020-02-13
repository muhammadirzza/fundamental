var newarr = []
var arr = [25,10,5,1]
function cekkoin(koin){
    for (var i=0;i<arr.length;i++){
        newarr.push(koin/arr[i]) 
        return newarr
}
}

// var num=49
// var arr = [25,10,5,1]
// for (var i=0;i<arr.length;i++){
//     var output=0
//     if(num%arr[i]!==0){
//         output++
//     }
//     console.log(output)
// }

// console.log(50/25)
// console.log(50/10)
// console.log(50/5)
// console.log(50/1)
console.log(cekkoin(49))