// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

/*
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(typeof myDate) //output => object


let myCreatedDate = new Date(2023 , 0, 23)
console.log(myCreatedDate.toDateString());
//month index stars from 0

let myNewDate = new Date(2023 , 0, 23, 5, 3)
console.log(myNewDate.toLocaleString());

let myCreated2Date = new Date("01-14-2023") //for mm-dd-yy format month starts from 01 not 00.
console.log(myCreated2Date.toDateString());

*/
/*
let myCreated2Date = new Date("01-14-2023")
let myTimeStamp = Date.now();   //to get recent date
console.log(myTimeStamp);
console.log(myCreated2Date.getTime());

//calculate the date of now in second
console.log(Math.floor(Date.now()/1000));

*/

let newDate = new Date();
console.log(newDate)
console.log(newDate.toString());
console.log(newDate.getMonth())  //output => 11 because month starts from 0.
console.log(newDate.getMonth() + 1 ) //now it will print the exact month
console.log(newDate.getDay())

// console.log(`Day - ${newDate.getDay()} the month is - ${newDate.getMonth() + 1} `)

newDate.toLocaleDateString('default', {  //customize
    weekday:"long",
})