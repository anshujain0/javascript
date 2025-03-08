const coding = ["js" , "c++", "java", "python"]

// coding.forEach( function (val) {
//     console.log( val)
// } )

// coding.forEach( (val) => {
//     console.log(val)
// } )

function print (item) {
    console.log(item)
}

//coding.forEach(print)

const mycoding = [
    {
        language : "javascript",
        file : "js"
    } ,
    {
        language : "java",
        file : "java"
    } ,
    {
        language : "python",
        file : "py"
    } 
]

mycoding.forEach( (item) => {
    console.log(item)
} )