const userEmail = "abc@gmail.com"

// if(userEmail){
//     console.log("Got email");
// }else{
//     console.log("Did not get");
// }

const userEmail1 = ""

// if(userEmail1){
//     console.log("Got email");
// }else{
//     console.log("Did not get");
// }

// False in case of above

// const userEmail2 = []

// if(userEmail2){
//     console.log("Got email");
// }else{
//     console.log("Did not get");
// }

// True in case of above


// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN(Not a Number)

//truthy values (some are listed below)
// "0" , 'false' , " " , [] , {} , function(){}

const newobject = {}

// if((Object.keys(newobject)).length === 0){
//     console.log("Object is empty");
// }

// false == 0
// false == ''
// 0 = ''

// Nullish Coalescing Operator (??) : null undefined

let val;
// val = 5 ?? 10  // Output = 5
// val = null ?? 10 // Output = 10 
// val = undefined ?? 15 // Output = 15

//console.log(val);

// Terniary Operator

// condition ? true : false

const teaPrice = 99
teaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80"); 