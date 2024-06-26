const user = {
    username: "Pratham",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Pratham", 8, true)
const userTwo = new User("Anshu", 9, false)
console.log(userOne.constructor);

// Always use new as it creates a new object which rectfies the problem of overwriting