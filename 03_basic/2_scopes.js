//let var const
/*
let a =2
const b = 3
var c = 4     //avoid to use var

console.log(a)
console.log(b)
console.log(c)
*/

//Block scope and Global scope

/*
let a = 300
if(true){
    let a = 10
    const b = 34                //inside the block this is block scope
    console.log("INNER: ",a);
}

console.log(a);      //this print a = 300 which is global scope 
*/

//Nested scope
/*
function one (){
    const user = "atanu"
    function two(){
        const ide = "vsCode"
        console.log(user)
    }
    //console.log(ide); // it will not work because it cannot access the inner scope
    two()
}
one()

if(true){
    const userName ="atanu";
    if(userName === "atanu"){
        const ide = " vsCode"
        console.log(userName + ide)
    }
   // console.log(ide)// not work because of the scope
}
//console.log(userName)  // not work because of the scope

*/

// INSTERESTING CONCEPT //

console.log(addone(5)) //this will work => 6
function addone (num){
    return num +1
}

//console.log(addTwo(5)) //but it will not work
const addTwo = function(num){
    return num+2;
}
