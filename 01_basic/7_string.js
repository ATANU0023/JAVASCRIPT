const name = 'atanu'
const age = 20 
const roll = 23

// console.log(name +" age :" + age + " roll :" + roll); //oldway to write 

/*

console.log(`helo my name is ${name} and my age is ${age}
 and roll is ${roll} `);  // It's called string interpolation #suggest to write code in this way.
 

//another way to declare string
const gameName = new String('atanufootball'); //copy this and run on browser console
console.log(gameName[1])
console.log(gameName._Proto_);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4)); //check the index and print the number in that position
console.log(gameName.indexOf('t'))//check the charecter in which position

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-3 , 4)
console.log(anotherString)

*/

const anotherNewString = "       atanu     ";
console.log(anotherNewString)
console.log(anotherNewString.trim());


const url = "https://atanu.com/atanu%20pramanik"
console.log(url.replace("%20", "-"))

//you can ask whether a particular value is present in the string or not example

console.log(url.includes("atanu")) //output => ture;
console.log(url.includes("payel")) //output => false;

// split and store in an array 
// here we doing the split based on "-"

const gamer = "atanu-rocky-sallar-javascript"
console.log(gamer.split("-"))  //output => [ 'atanu', 'rocky', 'sallar', 'javascript' ]




// [[Prototype]] //################## methods go though them ############################################
// : 
// String
// anchor : ƒ anchor()
// at : ƒ at()
// big :  ƒ big()
// blink :  ƒ blink()
// bold :  ƒ bold()
// charAt :  ƒ charAt()
// charCodeAt :  ƒ charCodeAt()
// codePointAt :  ƒ codePointAt()
// concat :  ƒ concat()
// constructor :  ƒ String()
// endsWith :  ƒ endsWith()
// fixed :  ƒ fixed()
// fontcolor :  ƒ fontcolor()
// fontsize :  ƒ fontsize()
// includes :  ƒ includes()
// indexOf :  ƒ indexOf()
// isWellFormed :  ƒ isWellFormed()
// italics :  ƒ italics()
// lastIndexOf :  ƒ lastIndexOf()
// length :  0
// link :  ƒ link()
// localeCompare :  ƒ localeCompare()
// match :  ƒ match()
// matchAll :  ƒ matchAll()
// normalize :  ƒ normalize()
// padEnd :  ƒ padEnd()
// padStart :  ƒ padStart()
// repeat :  ƒ repeat()
// replace :  ƒ replace()
// replaceAll :  ƒ replaceAll()
// search :  ƒ search()
// slice :  ƒ slice()
// small :  ƒ small()
// split :  ƒ split()
// startsWith :  ƒ startsWith()
// strike : ƒ strike()
// sub :  ƒ sub()
// substr :  ƒ substr()
// substring :  ƒ substring()
// sup :  ƒ sup()
// toLocaleLowerCase :  ƒ toLocaleLowerCase()
// toLocaleUpperCase :  ƒ toLocaleUpperCase()
// toLowerCase :  ƒ toLowerCase()
// toString :  ƒ toString()
// toUpperCase :  ƒ toUpperCase()
// toWellFormed :  ƒ toWellFormed()
// trim :  ƒ trim()
// trimEnd :  ƒ trimEnd()
// trimLeft :  ƒ trimStart()
// trimRight :  ƒ trimEnd()
// trimStart :  ƒ trimStart()
// valueOf :  ƒ valueOf()
// Symbol(Symbol.iterator) :  ƒ [Symbol.iterator]()
