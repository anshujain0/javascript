const score = 400
console.log(score)

const balance = new Number ('100')
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) //upto 2 decimal fixed the digit/number

const otherNumber= 193.9287
//console.log(otherNumber.toFixed(1))
console.log(otherNumber.toPrecision(3))

const hundred = 1000000000
console.log(hundred.toLocaleString('en-IN')) //in method we define indian standard method, if not it will return in US form

//++++++++++++++++++  MATHS ++++++++++++++++++++++++++++
console.log("MATHS PART")

console.log(Math)
console.log(Math.abs(-5)) //return absolute value 5
console.log(Math.round(5.6)); //6
// console.log(Math.ceil(1.2)); //2 -- return top value always
// console.log(Math.floor(3.9)); // 3 -- return floor value
console.log(Math.min(12,38,9,10));
console.log(Math.max(12,38,9,10));

console.log(Math.random())
console.log((Math.random()) * 10)
console.log(Math.floor(Math.random()*10) + 1) //+1 isliye if random value 0 aa jaye toh..

const min =10
const max= 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min)