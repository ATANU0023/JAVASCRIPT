
// let myName = "atanu   "
// console.log(myName.truelength);


/*
let myHeros = ["thor","spiderman"]

let heroPowers = {
    thor: "thunder",
    spiderman: "web",
}

Object.prototype.atanu = function(){
    console.log(`atanu is present in all objectds`);
}

Array.prototype.heyAtanu = function(){
    console.log(`hey atanu`);
}
//myHeros.atanu();
//heroPowers.atanu();

//heroPowers.heyAtanu();
myHeros.heyAtanu();

// Inheritance

const user = {
    name: "helo",
    emai:"helo@google.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvaliable: true ,
}
const TASupport = {
    makeAssignments : 'javascript assignment',
    fullTime: true,
    __Proto__: TeachingSupport,
}

Teacher.__Proto__ = user  //protypal inheritence;

//  Morden syntax

Object.setPrototypeOf(Teacher,user); //Teacher can access the user properties.

*/

let user= "atanu    ";

let userName = "ironman     ";
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`The true length is ${this.trim().length}`);
}

user.truelength();
"ironman     ".truelength(); //we can directly access the strings.
"spidrman".truelength()