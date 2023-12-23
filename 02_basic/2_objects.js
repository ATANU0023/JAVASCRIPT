//singleton   ...if made using constructor then it's singleton
//object literals
//object.create //singleton

const mysm = Symbol("key1");


const user = {
    name: "atanu",
    "full name": "atanu pramanik",
    [mysm]: "key23",          //to use symbol inside the object we have to declare it within bracket.
    age: 20,
    email: "atanu43@gmail.com",
    isLoggedIn: false,
    LastLoginDays:['monday','saturday']
}

/*

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]) //cann't access the full name using "." or (user.full name)
console.log(user[mysm]); //and to access we have to use bracket.
console.log(typeof user[mysm]);
//take symbol inside the object 

user.email = "atanuchatgpt.gmail.com" // using = we can override 

//if we want to freeze our object then

Object.freeze(user)
user.email = "apgoogle.com"  //from output you can see though we have chenge the mail
console.log(user);      //but for the freeze it's not changed.

*/

//@@@@@@@@@@@@ FUNCTIONS

user.greeting = function(){
    console.log("hello world");
}

console.log(user.greeting); // returnt back the functions reference.
console.log(user.greeting());


user.greetingTwo = function(){
    console.log(`hello user ${this.name}`); //object interpoletion
}                                           // when u put this. it will show the all keys inside the object. it reference the same object.

console.log(user.greetingTwo());