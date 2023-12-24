function sayMyName (){
    console.log("atanu")
}
sayMyName();

// function addTwoNumbers(num1, num2){  //the passed values are called parameters.
//     console.log(num1+num2)
// }

// addTwoNumbers(3,4);  //the passing values are called arguments


/*

function addTwoNumbers (num1,num2){
    let result = (num1+num2);
    return result
    console.log("atanu");// this line will never print because after return is doesn't chech anything.
}
const result = addTwoNumbers(3,5);
//console.log(result)

function loginUserMessage (user){
    if(!user){
        console.log("please enter a user Name !");
        return;
    }
    return  `${user} just logged in `
}

//console.log(loginUserMessage("payel"));
console.log(loginUserMessage());  //if you do not pass any value then it will
//show undefined and the rest line.

*/

function calculateCartPrice (...num1){   //this ... is also called rest operator.
    return num1;
}
//console.log(calculateCartPrice(200,400,500))

const user = {
    userName: "atanu",
    prices: 999
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.userName} and prices is ${anyObject.prices}` )

}

//handleObject(user);
//we can pass value like this also
handleObject({
    userName: "atanu",
    prices: 999
})

//handle array in function
//fetch the second value of the array..
const myArr = [200,3000,499,399,2900]

function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myArr));
//you can use like this also

console.log(returnSecondValue([200,3000,499,399,2900]));