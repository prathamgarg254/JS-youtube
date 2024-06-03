//Primitive
// 7 types = String,Number,Boolean,null,undefined,Symbol,BigInt

//Refernce(Non primitive)
//Arrays, object, function

const heroes = ["iron man" , "hulk" , "thor"];
let myobj = {
    name: "abc",
    age: "18",
}

const myfunction = function(){
    console.log("Hello");
}

// ****null's type of object
// Every non primitive data type is object  and functions is function (can be said as object function)

// *********************************************************************************************

// Types of memory in JavaScript
//Stack(primitive) , Heap(Non Primitive)

// Stack creates a copy whereas Heap uses pass by refernce

let user1 = "Pratham"
let user2 = user1;
user2 = "Anshuman"

console.log(user2);
console.log(user1);

let user3 = {
    email: "abc@gmail.com",
    id: 123,
}

let user4 = user3;

user4.email = "def@gmail.com"

console.log(user4.email);
console.log(user3.email);