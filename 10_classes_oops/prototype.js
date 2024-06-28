let myName = "Pratham    "

// console.log(myName.truelength);

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.pratham = function(){
    console.log("pratham is in all objects");
} //Power to all objects

Array.prototype.heyPratham = function(){
    console.log("hi");
}   //Only power to array



// heroPower.pratham()
// myHeroes.pratham()

// inheritance

const user = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()

"Pratham".trueLength()