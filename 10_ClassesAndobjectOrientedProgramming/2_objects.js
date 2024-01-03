function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2; //it will add a property to the function

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); //it will show the prototype of the function


function createUser(userName,score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function(){

    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const cricket = new createUser("atanu",230);
const chess = new createUser("atanu",200);

cricket.printMe();
chess.printMe();

/* 
    Here's what happens behind the scene when the new keyword is used:

    A new object is created: The new keyword initiates the creation of a new Javascript object.

    A prototype is linked: The newly created object gets linked to  prototype property of the
    constuctor function. This means that it has access to properties and methods defined
    on the constructor's prototype.

    The constuctor function is called: The constructor function  is called with the
    specified arguments, and this is bound to the newly created object. If no explicit return value is specified from 
    the constructor . javascript assumes this, the newly created object, to be the intended return value.

    The newly created object is returned: After the constructor function has been called, if it doesn't 
    return a non-primitive value (object, array, function, etc.), then newly created object is returned.
*/