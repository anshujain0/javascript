const myobj ={
     js : "javascript" ,
     cpp : 'c++' ,
     sol : 'solidity'
}

for (const key in myobj) {
    console.log(`${key} is ${myobj[key]}`);
}

//for-in loop not iterable on MAPS