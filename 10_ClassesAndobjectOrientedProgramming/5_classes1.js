// ES6
/*
class user{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return`${this.password}abc`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const userOne = new user('atanu','atanu@pramanik','1234');
console.log(userOne.encryptPassword());
console.log(userOne.changeUserName());
*/

//behind the scene

function user(userName,email,password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return`${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const userTwo = new user('atanu','atanu@pramanik','1234');
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUserName());