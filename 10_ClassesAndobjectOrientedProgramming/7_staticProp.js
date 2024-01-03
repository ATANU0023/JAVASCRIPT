class user {
    constructor(userName) {
        this.userName = userName;
    }
    logMe() {
        console.log(`username is ${this.userName}`);
    }

    static createId(){
       return console.log(`123`)
    }

}
const atanu = new user('atanu');
atanu.logMe();
atanu.createId();

class Teacher extends user{
    constructor(userName,email) {
        super(userName);
        this.email = email;
    }
    createId(){
        return console.log(`456`);
    }
}

const isha = new Teacher('isha','isha@pramanik');
isha.logMe();
isha.createId();