let myDate = new Date();
/*console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate); */

//let myCreatedDate = new Date(2024 , 5 , 4)   //Month starts from 0 in this type of declaration
//let myCreatedDate = new Date(2024 , 5 , 4 , 5 ,3)
//let myCreatedDate = new Date("05-06-2024")
//console.log(myCreatedDate.toLocaleString());

//let myStamp = Date.now();
//console.log(Math.floor(myStamp));

console.log(myDate.getMonth() + 1);

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long"
})