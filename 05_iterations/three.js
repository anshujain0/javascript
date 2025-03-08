//for of LOOP

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello W"
for (const greet of greeting) {
    //console.log(`each word is ${greet}`)
}

//MAP
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United states")
map.set('JP', "japan")
map.set('IN', "INDIA") //map me repeat values add ni hoti..

//console.log(map)

for (const [key , value] of map) {
    //console.log(key ,' : -' , value) //destructed of map in key and values
}

//object pe for-of loop
const myobj ={
    "game1" : "GTA" ,
    "game2" : "velorant"
}
// for (const key of myobj) {  THE for-of Loops is not iterable on objects , its on arrays and maps. but not on OBJECTS>>
//     console.log(key)
// }