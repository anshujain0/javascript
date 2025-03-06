//if 
// < , > <= , >= , == != , ===
const temp = 41
if(temp<50) {
    console.log("temperature less than 50")
} 
else {
    console.log("Temp greater than 50")
}
//if-elseif-else
const userLoggedin= true
const debitCard = true
const loggedFromGoogle = false
const loggedFromEmail = true

if(userLoggedin && debitCard && 2==2) {
    console.log("Allow to purchase")
}

if(userLoggedin || loggedFromGoogle || loggedFromEmail) {
    console.log("Can purchase");
    
}