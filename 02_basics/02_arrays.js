const marvelHeroes = ["thor" , "spiderman" , "ironman"]
const dcHeroes = ["superman" , "batman" , "flash"]

//marvelHeroes.push(dcHeroes)
//console.log(marvelHeroes);
//console.log(marvelHeroes[3][1]);

const allHeroes = marvelHeroes.concat(dcHeroes) 
//console.log(allHeroes);

const allHeroes2 = [...marvelHeroes , ...dcHeroes]
//console.log(allHeroes2); //same as concat

const anotherArray = [1,2,3,[4,5,6],4,5,[6,[7,8]]]

const usableAnotherArray = anotherArray.flat(Infinity)
//console.log(usableAnotherArray);

//console.log(Array.isArray("Pratham"));
//console.log(Array.from("Pratham"));
console.log(Array.from({name: "pratham"})); //Interesting (it does not know how to convert these)

let s1=100;
let s2=200;
let s3=300;

console.log(Array.of(s2 ,s2 ,s3));