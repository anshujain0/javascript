//stack - primitive 
//heap - non primitive
//note - string is a primitive data type
console.log("STACK MEMORY")
 let myName ="Anshu"
 let anotherName = myName
 anotherName = "jain"
 console.log(myName) //anshu
 console.log(anotherName) //jain
 //as stack stored block by block, in first myname then in anotherName copy of myName created, so change in line 6 is done in copy not actual myName

 console.log("HEAP MEMORY")
let userOne = {                      //object created (non primitive)
    email: "anshu@google.com" ,
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email)
console.log(userTwo.email) 
//in non-primitive HEAP memory, no copy is created. the direct changes to actual reference variable 