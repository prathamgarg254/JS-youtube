function sayMyname() 
{
console.log("a");
console.log("b");
console.log("c");
}

//sayMyname()

// function addTwoNumbers(number1 , number2)
// {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2)
{
    let result = number1 + number2;
    return result
    console.log("abc"); //This would be unreachable as we have already returned first
}

//addTwoNumbers(3,4)
//addTwoNumbers(3,"4") //34

const result = addTwoNumbers(3,5)

// console.log("Result : ",result);

function loggedInMessage(username)
{
    if(!username )//or username === undefined)
        {
            console.log("Please enter username");
            return
        }
    return `${username} just logged in`
}

//console.log(loggedInMessage("abc"));

//console.log(loggedInMessage());

// function calculateCartPrice (...num1)
// {
//     return num1
// }

// console.log(calculateCartPrice(40,50,60));

function calculateCartPrice (val1 , val2 , ...num1)
{
    return num1
}

// console.log(calculateCartPrice(40,50,60,2000));

const user = {
    username: "abc",
    price: 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "abc",                 //Both ways can  work
    price:99
})

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));