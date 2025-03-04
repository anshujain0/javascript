// singelton
//object.create -- also a method to create object

// object literals

const mySym = Symbol("key1") //symbol bana rahe hai

const user ={
    name : "Anshu" ,
    "full name" : "Anshu Jain" ,
    [mySym] : "mykey1" , //symbol define karne ke liye [] bracket hi use krne hote --> in interview asked about this making symbol and use it in object
    age : 18 ,
    email : "anshu@google.com" ,
    location : "Indore" ,
    isLoggedin : false
}

console.log(user.email) 
console.log(user["email"])
//console.log(user."full name") //not valid syntax also didnt support
console.log(user["full name"])

console.log(user[mySym]) //symbol access
// console.log(typeof mySym) //also symbol type is symbol not string

user.email = "anshu@gmail.com"
Object.freeze(user) //once freezed

user.email = "anshu@yahoo.com" //no change happen in object after freezing it
console.log(user)