let a=2
if(true){
    let a =10
    const b = 20
    console.log("Inside value" , a)
}
console.log(a)

function one (){
    const username = "Anshu"

    function two () { //function two-- func inside funct
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) --> this gives error as block scope of function 2 already closed , so website name is not accessible outside the scope

    two() //calling function 2
}

//one() //calling function1 , in this case, after calling one inside it ,it calls 2

if(true) {
    username ="Anshu"
    if(true){
        surname =" Jain"
        console.log(username+surname)
    }
}

//++++++++++++++INteresting+++++++++++++++++

console.log(addOne(5)) //ye fir bhi run ho jayega bhale declaration next line me hua ho..
function addOne(num) {
    return num+1
}

//addTwo(10) //this gives error as called ->can not access before initialization
const addTwo = function(num) { //isko expression bhi bolte function ko kisi variable me hold kara diya
    return num + 2
}
