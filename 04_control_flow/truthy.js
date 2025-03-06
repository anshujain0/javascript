//const userEmail = "anshu" -> any value in var is treated like TRUE -> Truthy values
//const userEmail = "" //empty string is treated like FALSE
const userEmail = [] //empty array treated as TRUE

// if(userEmail) {
//     console.log("got user email");
// } else console.log("not get mail")

//+++++++++++++++++++++++++++++++++++
//FALSY values
//false , 0 , -0 , BigInt 0n , "" , null, undefined , NaN 
//remaing are truthy value

// some TRUTHY Value
//"0", 
// 'false',
//  " "(not a empty string, one space is given),
//  [], {}(empty obj) , function() {}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

if(userEmail.length===0) console.log("Array is empty") //array length check

const obj ={}
if(Object.keys(obj).length===0) console.log("object is empty")

//Nullish Coalescing Operator (??) : null undefined

//let val1 = 5 ?? 10 //o/p 5
//let val1 = null ?? 10 //op 10
let val1 = undefined ?? 10 //10

console.log(val1)

//TERNARY operator -
//  condition ? true : false
const price = 100
price>=80 ? console.log("Price greater than 80") : console.log("Less than 80")