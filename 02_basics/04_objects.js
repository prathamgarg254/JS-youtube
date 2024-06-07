//const tinderUser = new Object() //Singelton object
const tinderUser = {}             //Non-singelton object

tinderUser.id = "123abc"
tinderUser.name = "Anshuman"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regUser = {
    name: "Anshuman",
    fullname:{
        userfullname:{
            firstName: "Anshuman",
            lastName: "Garg"
        }
    }
}

//console.log(regUser.fullname.userfullname.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = {obj1 , obj2}  //Same as Array(returns two objects)

//const obj3 = Object.assign({}, obj1, obj2) //{} -> target , others -> source
//console.log(obj3);

const obj3 = {...obj1 , ...obj2} //another way of combining
//console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //Stores key in arrays
console.log(Object.values(tinderUser)); //Stores values in arrays
console.log(Object.entries(tinderUser)); //Stores entries in arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn'));