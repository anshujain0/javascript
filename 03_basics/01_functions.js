// function add (number1 , number2) {  //in line1 in () are parameters
//     console.log(number1 + number2)
// }

// add(3,5)  //in () are argumenets
// add(3,"4")

function add (number1 , number2) {
    // let result = number1+number2
    // return result           // line 9,10 ka kaam , direct line11 kr rahi aur ek variable naya aane se bhi bach rha 
    return number1 + number2
}

const result = add(3,4)
console.log("result is" , result)
//

function userlogged (username) {
    return `${username} is logged in`
}

console.log(userlogged("Anshu"))
console.log(userlogged()) //undefined login --> to overcome this

function userlog (username) {
    if(username===undefined) { //can also if(!usernmae)
        return "Please enter valid username"
    }
    return `${username} is logged in`
}

console.log(userlog()) //now it says please enter valid 

function CartPrice (...num) {  //here ... is rest operator
    return num
}
//console.log(CartPrice(200,300,500,1000)) //it gives a array of all num

const user = {
    username : "Anshu" ,
    price : 1999
}

//object in fucntions
function handleobj (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobj(user) //passing an object in function

const newArray = [200,100,400]

function returnSecondValue (getArray) {
    return getArray[1]  
}

//console.log(returnSecondValue(newArray)) //100
console.log(returnSecondValue([200,100,400])) //100 both ways are correct..

