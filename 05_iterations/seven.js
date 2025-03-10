const myNums =[1,2,3]

// const total = myNums.reduce( function(acc,currval) {
//     console.log(`acc : ${acc} and current value : ${currval}`)
//     return acc+currval
// },0 ) //0 is giving initial value to accumulator

const total = myNums.reduce( (acc,curr) => acc+curr ,0 )
console.log(total)

const shoppingCart = [
    {
        item : "js" ,
        price : 2999
    },
    {
        item : "python" ,
        price : 999
    },
    {
        item : "data science" ,
        price : 12999
    }
]

const totalprice = shoppingCart.reduce( (acc,item) => acc+item.price , 0 )

console.log(totalprice)

//Javascript Part1 ended with Basics, controlflow and iterations