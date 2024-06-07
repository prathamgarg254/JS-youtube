const mySym = Symbol("key1")

const JsUser = {
    name: "abc",
    [mySym]: "key1",
    "full name": "abc def",
    age: 18,
    location: "Jaipur",
    email: "abc@gmail.com",
    isLoggedIn: false,
    LastLoggedInDays: ["Monday" , "Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]); //this can be accesed Only in this wAY
//console.log(JsUser[mySym]);

JsUser.email = "def@gmail.com"
//Object.freeze(JsUser) //to lock all the attributes of object

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User , ${this.name}`);
}
//console.log(JsUser.greeting); //undefined
console.log(JsUser.greeting());
console.log(JsUser.greeting2());