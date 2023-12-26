// for of loop
/*
const arr =[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}
*/
/*
const greetings = "helo world"
for (const num of greetings) {
    console.log(num.split(" "))
}

*/

//Maps
/*
const map = new Map()  //unique values 

map.set("IN" ,"India")
map.set("usa","united state of america")
map.set("fr","france")

//console.log(map);

for (const [key, value] of map) {
    console.log(key ,  "-" , value);
}
*/

const myObj = {           //myObj is not iterable
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

for (const [key , value] of myObj) {
    console.log(key, "-", value)   
}