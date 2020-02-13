const Faktorial=(num)=>{
    var arr=[]
    for (var i=1;i<=num;i++){
        arr.push(i)
    }
    return arr.reduce(function(a,b){
        return a*b
    })
}
console.log(Faktorial(5))
console.log(Faktorial(4))
console.log(Faktorial(10))

