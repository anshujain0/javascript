//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate)  //date is also a OBJECT

// let myCreatedDate = new Date(2026 , 0 , 22) //in JS month starts from 0
// let myCreatedDate = new Date (2023 , 0 , 30 , 5 , 3)
let myCreatedDate = new Date ("01-14-2025")
console.log(myCreatedDate.toLocaleDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())

//customization according to need
newDate.toLocaleDateString('default' , {
    weekday : "long"         //here in bydef. week show MON(for monday) by making it LONG we can get MONDAY full
})
