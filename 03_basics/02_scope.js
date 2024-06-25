var c = 300;

if(true)
    {
        const a = 10
        let b = 20
        var c  = 30 //or c = 30
    }

// console.log(c);  //The Problem in c is var has no scope , so use let instead

function one()
{
    const username = "hitesh"
function two()
{
    const website = "youtube"
    console.log(username);
}
console.log(website); //cannot access
two()
}
one()


addOne(5) //This will work properly
function addOne(num)
{
    return num + 1
}


addTwo(5) //This will display error
const addTwo = function(num)
{
    return num+2
}

