class users{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`username is ${this.userName}`);
    }
}

class Teacher extends users{
    constructor(userName,email,password){
        super(userName);
        this.email = email;
        this.password = password;
    }

    addCoursr(){
        console.log(`A new course is added by ${this.userName}`);
    }
}

const userOne = new Teacher('atanu','atnap$','12345');
userOne.logMe();
userOne.addCoursr();
const userTwo = new users('arjun');
userTwo.logMe();

console.log(userOne instanceof users); //true
console.log(userTwo instanceof Teacher); //false

