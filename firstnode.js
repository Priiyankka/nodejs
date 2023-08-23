let max=(x)=>{
    let res=x.reduce((acc,ele)=>{
        if(acc<ele){
            acc=ele
        }
        return acc
    })

    return res
}
// module.exports=max

let min=(x)=>{
    let res=x.reduce((acc,ele)=>{
        if(acc>ele){
            acc=ele
        }
        return acc
    })
    return res
}
// module.exports={max,min}
// module.exports={a:max,b:min}
module.exports.Max=max
module.exports.Min=min

// let arr=([1,3,6,9,10])

//     let res=arr.reduce((acc,ele)=>{
//         if(acc<ele){
//             acc=ele
//         }
//         return acc
//     })
//     console.log(res);

// max=([1,3,6,9,10])
// console.log(res)
// console.log(max(arr))