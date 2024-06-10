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

console.log(loggedInMessage());
