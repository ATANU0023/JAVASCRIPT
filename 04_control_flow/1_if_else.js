//  if

// if(ture){   //true => exucute code
//             //false =>not execute the code
// }

//comparison > , < ,<= ,>= , ==, != , === ,!== 
//Triple equal "==="  it also checks the type

// if( 2 == "2"){
//     console.log("executed");
// }

/*
if( 2 === "2"){  //here its checking the type that's why its printing  the else part /
    console.log("executed");
}else{
    console.log("Triple equal")
}
*/
//var scope is global //not to use var 

const score =200
if (score > 100) {
    const power = "fly";
    console.log(`use power : ${power}`)

}
//console.log(`use power : ${power}`)

 const balance =1000
// if(balance> 500) console.log("test"); //implisit scope(do not write code in this way)

/*
if(balance<500){
    console.log("less then 500");
}
else if(balance<750){
    console.log("less then 750")
}
else if (balance<900){
    console.log("less then 900")
}
else{
    console.log("less then 1200")
}
*/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if(userLoggedIn && debitCard){
    console.log("allow to buy ")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow to login")
}
