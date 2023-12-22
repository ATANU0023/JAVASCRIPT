//string to number
/*

let score = 33
let s ="99"
console.log(typeof score);
console.log(typeof s);

let valueInNumber = Number(s);
console.log(typeof valueInNumber);

//1 condition study

let a ="33slfd"
let aInNubmer = Number(a);  // This part you should notice i have enterd here string "33slfd" and it convert to number .
console.log(typeof aInNubmer); // output =>nuber
console.log(aInNubmer)  // output => NaN (Not a Number)  but the output value is NaN.

//2nd condition study

let c = null;
let convert = Number(c);
console.log(typeof convert) 
console.log(convert);  //OUTPUT => 0

//3rd condition study

let d = undefined
let dInNumber = Number(d)
console.log(typeof dInNumber)
console.log(dInNumber);     //output =>Nan

//4th condition study

let e = true  //boolean 
let eInNumber = Number(e)
console.log(typeof eInNumber)
console.log(eInNumber);     //output => 1 if e =false then the output will be 0 


//"33" => 33
//"33abd" => NaN
//true => 1 ; false => 0

//Boolean type conversion

let isLoggedIn = 1
let isLoggedInToBoolean = Boolean(isLoggedIn);
console.log(typeof isLoggedInToBoolean);   // OUTPUT => boolean
console.log(isLoggedInToBoolean);         // OUTPUT => true

//condition check 
//1 

let i = ""
let iToBoolean = Boolean(i);
console.log(typeof iToBoolean);   // OUTPUT => boolean
console.log(iToBoolean);         // OUTPUT => false because there is no value

//2

let j = "hello"
let jToBoolean = Boolean(j);
console.log(typeof jToBoolean);   // OUTPUT => boolean
console.log(jToBoolean);         // OUTPUT => true because there is string

//1 => true ; 0 => false
//" " =>false
//"hello" => true

//number to string

let number =23
let NumberToString = String(number)
console.log(typeof NumberToString);
console.log(NumberToString);        //OUTPUT => "23" now 23 is in string type

*/


/****************************************       OPERATIONS     ****************************************/

/*
let value = 3 
let negValue = -value
console.log(negValue)


console.log(2+2) //addition
console.log(2/2) //division
console.log(2-2)  //substraction
console.log(2*2) //multiplication
console.log(2**4)  //2 to the power 4 
console.log(4%2) //reminder

*/

/*
let str1 = "hello"
let str2 = " atanu"
let str3 = console.log(str1 + str2)

//tricky
console.log("1" + 2)    //output => 12
console.log(2 + "1")    //output => 12
console.log("1" + 2 + 2) //output => 122
console.log(2 + 1 + "2") //output => 32
    //one thing to remember if there is number first then it converts it to nubmer .if string then to string 
    // read ecma script docs to know more about the algorithm ..

console.log(+true)  //output => 1
//console.log(true+) //this will show error 
console.log(+"")    //output => 0

*/

let gameCounter = 100
let point = gameCounter++      //post increment..  here the parser first found gameCounter which value is 100. then incrementing the value to 101
console.log(point)            //and that initialize to point variable.

let game = 100  
let p = ++game // pre increment .. here the parser found the ++ first then game so it will add 1 to game and it will be 101 and initialize to 
console.log(p)  //point variable.

//special case
let x =100
x++
console.log(p)  //here both will print same result . because we are not storing the value to the other variables.
++x
console.log(p)