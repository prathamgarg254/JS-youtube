const user = {
    username: "abc",
    price: 99,

    welcomeMessage : function()
    {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "def"
// user.welcomeMessage()

// console.log(this);  //always refers to empty object as there is no context

// ********************  in browser console.log(this) this points to window check once

// function chai()
// {
//     let username = "abc"
//     console.log(this.username);
// }

// chai() 


// const chai = function()
// {
//     let username = "abc"
//     console.log(this.username);
// }
// chai()

// Arrow function

const chai = () => {
    let username = "abc"
    console.log(this);
}

//chai()

//const addTwo = (num1 , num2) => {
//  return num1 + num2
//}   

// Note : If curly braces are used then return function is to be used or else you could as follows

const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(3,4));
