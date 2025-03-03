const name = "Anshu"
const age = 18

//console.log(name+ age + " value")
console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String("anshuj")  //string define karne ka hi method with help of object
console.log(gameName[0])
console.log(gameName[2]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase()) //this is a function --> non primitive --> HEAP memory --> actual variable me change hoga
console.log(gameName.charAt(3))
console.log(gameName.indexOf('f'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-4,4)
console.log(anotherString)

const newName = "       Anshu       "
console.log(newName)
console.log(newName.trim())

const url = "https://bitcoin.com/btc%20price" //browser by-default convert url space into %20 like (anshu jain = anshu%20jain)
console.log(url.replace('%20','-'))

console.log(url.includes('btc'))

const heroName = "Anshu-Jain-SDE-Developer"
console.log(heroName.split('-'))  //creates a array of string based on split fact