let score= "92djk"

console.log(typeof score); //dono hi tarike type pta karne ke hai,koisa bhi use kr skte
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber); //output NaN - not a number

//if score = null -- value=0
//if score= undefined -- value = undefined

let isLoggedin= 1
let boolenIslogged = Boolean (isLoggedin) //ye String,boollean ka S,B capital ayega

console.log(boolenIslogged)

// if isLoggedin="" empty o/p=false; or if any string values or anything o/p=1(true)
console.log("Heading - String conversions")

let snum= 87 
let stringnumber = String (snum)
console.log(typeof snum)
console.log(typeof stringnumber);
console.log(stringnumber)
