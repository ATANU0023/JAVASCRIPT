function setUserName(useName){
    //complex DB calls

    this.useName = useName
    console.log("called");
}

function createUser(userName,email,password){
    setUserName.call(this,userName); //it will call the setUserName function and it     will set the userName and this will pass the referece of the object.
    this.email = email;         //the .call passes the current execution context to   another function.
    this.password = password;
}

const userOne = new createUser("atanu",'atanu@pramanik','1234');
console.log(userOne);