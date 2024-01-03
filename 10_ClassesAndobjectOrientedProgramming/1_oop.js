//Object literal 
/*
const user = {
    userName:'atanu',
    loginCount: 8,
    signedIn: true,

    // Method
    getUserDetails: function(){
        console.log("got user details from the database");
        //console.log(`userName: ${this.userName}`);
        //console.log(this);
    }
}
console.log(user.userName);
console.log(user.getUserDetails());
*/

function user(userName, loginCount,isLoggedIn){ //this is a function constructor
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //method
    this.greetings = function(){
        console.log(`Welcome ${this.userName} `);
    }

    //return this;  //implicitly it always return this; so no need to write it
}

const userOne = new user('atanu', 8, true); //new keyword creates a new empty object and then it calls the user function
const userTwo = new user('saha', 5, false); //it's overwrites the userOne
//console.log(userOne);
//console.log(userTwo);
//userOne.greetings(); //calling the method
console.log(userTwo.constructor); //it will show the constructor function