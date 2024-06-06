// array

const myArr = [0 ,1 ,2 ,3 ,4 ,5]

//console.log(myArr[0]);

// Arrays share shallow copies i.e with one refernce

const myArr2 = new Array(1,2,3,4)
//console.log(myArr2);
//console.log(myArr2[1])

myArr.push(6)
myArr.pop()

myArr.unshift(9)  //Adds 9 to the front
myArr.shift() //removes from the first of the array

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(4))

const newArr = myArr.join()  //converts all elements of array into string
//console.log(newArr);
//console.log(typeof newArr);

//slice,splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)  //does not include 3
console.log(myn1);
console.log("B" , myArr);

//slice does not change the original array

const myn2 = myArr.splice(1,3)  //does not include 3
console.log(myn2);
console.log("c" , myArr);