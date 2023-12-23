/*######################### NUMBERS ###################################*/
/*
const score = 100
console.log(score)

//explicitly declare the datatype of 100
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const anotherNumber = 123.8932
console.log(anotherNumber.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //by default uk numbersystem but using "en-IN" We can achive indian number presenting system
*/


/*####################################  MATHS #######################################*/

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.ceil(4.5))  // it will choose the neartest high value
console.log(Math.floor(4.7)) //it will choose the lowest value

console.log(Math.random())
console.log((Math.random() *10) +1)
console.log(Math.floor(Math.random() *10) +1)

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min  + 1)) + min)
