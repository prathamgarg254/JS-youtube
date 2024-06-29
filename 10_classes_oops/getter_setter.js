class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()

        // or ( different case )

        // return `${this._password}Pratham`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("hitesh.ai",'123')
console.log(hitesh.password);
console.log(hitesh.email);