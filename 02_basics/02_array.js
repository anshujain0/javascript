const lan_1 = ["C++", "java" , "python"]
const lan_2 = ["html", "css", "javascript"]

//lan_1.push(lan_2) // -- adding lan2 as element in lan1

//console.log(lan_1) 
//console.log(lan_1 [3][2]) //op javascript

/* NOTE - push same array me hi push karta hai, but concat naye array banake return karta hai */
//concat
// const all_lan = lan_1.concat(lan_2)
// console.log(all_lan)

//spread operator
const all_lan = [...lan_1, ...lan_2]
console.log(all_lan)
//spread more preferable over concat

const another_arr = [1,2,3,[8,29,2],9,10,[2,7,8]]

console.log(another_arr.flat(Infinity)) //broke all sub-array into single elements and give a simple one array with all elements -- infinity is for suitablity , here can also use 2 (as two subarr present inside)

console.log(Array.isArray("Anshu"))
console.log(Array.from("Anshu"))
console.log(Array.from({name : "anshu"})) //interesting case - as return empty array,not abl to determine whether keys array formed or value...

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))