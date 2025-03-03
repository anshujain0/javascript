//primitive data type
let isloggedin= false //boolean
let score=null //null
let nam="Anshu" //string
let age; //undefined
//symbol to make unique
const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log (id===anotherId) //false as symbol Unique for both

//non Primitive (reference)

const heros=["shaktiman", "doga" , "bheem"] //arrays
//console.log(heros)

//objects
let myObj={
    na : "Anshu",
    age : 18, 
}

//function
const myFunc = function() {
    console.log("Hello Worldd");
}

//return types
console.log(typeof anotherId)