//for 
for (let i = 0; i < 10; i++) {
    const element = i
    //console.log(element)
}
//console.log(element) //it gives error as outside of scope and not defined outs

for(let i=0;i<10;i++) {
    for(let j=0; j<10; j++) {
        //console.log(`${i} * ${j} = ${i*j}`)
        //console.log(i + '*' + j + '=' + i*j) 
        //both syntax works same in line 10 & 11
    }
}

const myArray =["batman" , "superman", "shaktiman"]

for (let i = 0; i < myArray.length; i++) { //loops inarray
    const element = myArray[i];
    //console.log(element)
}

//Break continue
for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log("5 is detected");
        break
    }
   console.log(i)
    
}