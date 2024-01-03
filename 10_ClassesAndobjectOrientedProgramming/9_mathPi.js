// console.log(Math.PI)
// Math.PI = 5 ;
// console.log(Math.PI)  //cann't overrite.

// const property = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(property)

const car = {
    name : 'audi',
    price: 390,
    isAvailable : true,

    orderCar: function(){
        console.log("code fat gaya!")
    }
}
//console.log(obj);
console.log(Object.getOwnPropertyDescriptor(car, "name"));

Object.defineProperty(car , 'name',{        //now u can change the property.
//     writable: false,
     enumerable: false
 })
// console.log(Object.getOwnPropertyDescriptor(car, "name"));

for (let[key,value] of Object.entries(car)) {
    if(typeof value != 'function'){
    console.log(`${key} : ${value}`)
    }
}