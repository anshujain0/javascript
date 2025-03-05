//obj declaration
//const user = new Object() --> Singleton object hai

const user = {} //-> non singleton object

const regularUser = {
    email : "xyz@google.com" ,
    fullname : {
        userfullname : {
            firstname : "Anshu",
            lastname : "Jain"
        }
    }
}
//console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.lastname)

const obj1 ={
    1 : "a",
    2: "b"
}
const obj2= {
    3: "c",
    4 : "d"
}
//const obj3 = {obj1, obj2}  //object ke andar object store ho gya. which we dont want
//const obj3 = Object.assign(obj1,obj2) //gives which we want
const obj3 = {...obj1, ...obj2} //mostly used gives same o/p as above
console.log(obj3)

const users = [  //array of objects
    {
        id : 1 ,
        email: "user1@gmail.com"
    },
    {
        id : 2,
        email: "user2@gmail.com"
    }
]
users[1].email //accessing

//

console.log(regularUser)

console.log(Object.keys(regularUser)) //return keys in array
console.log(Object.values(regularUser))

console.log(regularUser.hasOwnProperty('isLoggedin'))