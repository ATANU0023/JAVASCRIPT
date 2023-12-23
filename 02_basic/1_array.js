const myArr = [0,1,2,3,4,5,6]   //in js array is resizeable 
console.log(myArr[0])

const marvel = ['ironMan','Thor','captainAmerica','hulk'];

const myArr2 = new Array(1,2,3,4);
// console.log(typeof myArr2);    //it will show object because in JS we can create objects using constructor function also

//Array Methods

/*
myArr.push(9)
console.log(myArr);

myArr.push(20)
console.log(myArr);
myArr.pop()
console.log(myArr);
*/

/*
myArr.unshift(9);   //add the value at the starting of the array.
console.log(myArr);

myArr.shift();   //delete the 1st value.
console.log(myArr);

console.log(typeof (myArr.includes(9)));
console.log(myArr.includes(9));

console.log(myArr.indexOf(9));
console.log(myArr.indexOf(4));

*/

/*
const newArr = myArr.join()
                                //After join it transform the arry into string..  point to be noted.
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)
*/

//slice and splice **
/*
console.log("A ", myArr)

const myn1 = myArr.slice(1, 3); //in slice value is taken from 1 and 2 and not from 3.
console.log("B ", myn1)     //and slice doesn't manupulate the orginal array..
console.log(myArr);

const myn2 = myArr.splice(1,3); //in splice the value here from 1 to 3 is extract form the
console.log("C ",myn2);        //orginal array.
console.log(myArr);  // Splice manupulate the orginal array.
*/



const marvel_heros = ['ironnam','thor','spiderman']
const dc_heros = ['superman','flash','batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);      //here dc_heros array push to the marverl_heros array as element 
                                //the whole dc_heros is one element.

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);                      //but when we concat the array elements of dc_heros 
        //add to the marvel_heros array , but all heros are individual element here. 
     
        
//** Sprade
//to do the same work as the concat 

const newheros = [...marvel_heros, ...dc_heros]
console.log(newheros); // output => [ 'ironnam', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //here in parenthesis we give the depth
console.log(real_another_array);

console.log(Array.isArray("atanu"));
console.log(Array.from("atanu"));//convert the string into array 

console.log(Array.from({name: "atanu"})); //falied to make array .//gives empty array result.
//because Array.from only convert iterable objects

let a =100
let b = 102
let c = 230

console.log(Array.of(a,b,c)); //it converts the values in  an array.