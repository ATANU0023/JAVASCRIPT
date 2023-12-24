/*

const user = {
    userName : "atanu",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to our website`);//we use "this" to acceess the current context.
       // console.log(this); 
    }
    
}
user.welcomeMessage();
user.userName = "sam";
user.welcomeMessage();

*/
//console.log(this);// now its show empty parenthesis because no object is here globally.
/*

function one(){
    let userName = "atanu";
    console.log(this) //u can found a lots of objects
    //console.log(this.userName) //=> undefined ,,  we cannot user "this" in the functions.
}

one();
*/

//arrow function


// const one = () =>{
//     let userName = "atanu"
//     console.log(this);
// }
// one();

// ARROW function syntax "=()=>"   //it is explecit return//
const addTwoNumbers =(num1 ,num2)=>{
    return num1 + num2;
}
console.log(addTwoNumbers(3,4))

//implicit return.
//const addTwoNumbers =(num1 ,num2) => num1 + num2; //here we no need to use the return keyword,
//const addTwoNumbers =(num1,num2) => (num1+num2); 
//if you are using parenthesis then no need to use return keyword . but for curly brases we have to use return keywork

//to return object we have to use curly brases
const two = (num1,num2)=>({userName: "atanu"})
console.log(two(4,5))

//IMPORTENT QUESTION : Difference between normal functions and arrow functions. 



