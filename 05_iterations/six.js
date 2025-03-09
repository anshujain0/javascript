const myNums =[1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num>4 )
// //const newNums = myNums.filter( (num) => {
//     return num>4
// }) //lone 3&4 both same code, as {} is used, return keyword have to be used explicitally.. otherwise return empty array
//console.log(newNums)

const newNums = myNums.map( (nums) => nums+10) //adds 10 to every element and return
//console.log(newNums)

//chaining --> map
const newNum = myNums
                .map( (num) => num*10)
                .map( (num) =>num+1 )
                .filter( (num) => num>40 )
console.log(newNum)