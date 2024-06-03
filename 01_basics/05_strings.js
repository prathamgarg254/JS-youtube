const name = "abc"
const repoCount = 50

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//One more way to declare string
const gameName = new String('obdu-prohibito-123')

//For more exploration check on web console
/*
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));
*/

/*
const newName = gameName.substring(0,4) //4 is not included
console.log(newName);

const newName1 = gameName.slice(-14,10)  //starts from behind and cancels last 4
console.log(newName1);

const newName2 = "   abc   "
console.log(newName2);
console.log(newName2.trim());
*/

const url = "https://google.com/pratham%20garg"
console.log(url.replace('%20' , '-'));

console.log(url.includes('abc'))

console.log(gameName.split('-'));