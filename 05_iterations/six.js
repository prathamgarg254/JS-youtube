const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

//  filter returns value whereas for each fails to return values
// ***** Here we have not considered curly brackets , so it will itself return but if we use curly brackets we need to return as well 
// as shown below

const newNums1 = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums1);

// This can also be done as shown below 

const newNums2 = []

myNums.forEach( (num) => {
    if(num > 4)
        {
            newNums2.push(num)
        }
})
console.log(newNums2);