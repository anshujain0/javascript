//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// why IIFE 
// Global scope ke pollution se problem hoti hai baar baar , and we want ki that particular function start ho jaye jese hi open kre , So we Used IIFE

 (function one () {
   //named iife
    console.log("DB connected")
 }) ()  ; //to end iife -> explicitally ; is used

 ( () => {
   console.log("DB Two connected")
 }) ()