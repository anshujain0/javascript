const user = {
    username : "anshu" ,

    welcomeMessage : function () {
        console.log(`${this.username} ,Welcome to website`) //this - refers to current context
        // console.log(this) //->gives the whole current context of object
    }
}
// user.welcomeMessage()
// user.username = "alexa"
// user.welcomeMessage()

//console.log(this) //it gives empty object{}, if run independently, because no global 

// function one () {
//     let username = "anshu"
//     console.log(this.username)
// }
// one() //undefined

// const one = function (){
//     let username = "anshu"
//     console.log(this.username)
// }
// one() //undefined

const one = () => {
    let username= "anshu"
    console.log(this.username)
}
//one() //undefined

//arrow function  -- () => {}
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

const add = (num1,num2) => num1+num2 //a valid function without {}and return as we know our function code is of one line hence we use this

const y = ()=> ({username : "anshu"})//()use is must for good practice and also object return hoga hi ni without ()

//arrow function
//1. () => {}
    //2. () => () //if sinle line code