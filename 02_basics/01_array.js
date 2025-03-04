//array declaration
const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2])
// console.log(myArr2[1])

//array methods 
myArr.push(6)
myArr.pop() //pop last element

myArr.unshift(8) //add to 0th index i.e. first place of array
myArr.shift() //delete first element of array

//console.log(myArr.includes(9)) --> false
//console.log(myArr.indexOf(23)) --> -1

const newArr = myArr.join()  //convert array into string
console.log(myArr)
console.log(newArr) //both o/p same but dataype change to string
console.log(typeof newArr)

// SLICE , SPLICE ****
console.log("SLICE  ")
console.log("A : before slice" , myArr)

const myN1 = myArr.slice(1,3)
console.log(myN1) //range not included 1,2 o/p
console.log("B : after slice ", myArr) //no changes into original array. OG array same 0,1,2,3,4,5

//Splice
console.log("SPLICE")

console.log("X", myArr)

const myN2 = myArr.splice(1,3)
console.log(myN2)
console.log("Y : AFter Splice" , myArr) //splice me range ko to include kiya but also changes happen into original array , as we print after splice array contain only remaining elements