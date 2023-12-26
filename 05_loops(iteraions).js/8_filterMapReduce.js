const myNums = [1,2,3]

/*
const total = myNums.reduce(function (accumuletor, currentvalue){
    console.log(`acc: ${accumuletor} and currval : ${currentvalue}`)
    return accumuletor + currentvalue;
},0)
console.log(total)
*/

// const myTotal = myNums.reduce((acc , currval)=> acc+currval , 0 )
// console.log(myTotal)

const shoppingCart = [
    {
        name:'Tomato',
        quantity:4,
        pricePerItem:0.56
    },
    {
        name:'Potato',
        quantity:8,
        pricePerItem:0.16
    },
    {
        name:'Brinjal',
        quantity:7,
        pricePerItem:1.56
    },
    {
        name:'Ginger',
        quantity:2,
        pricePerItem:0.96
    },
    {
        name:'Mango',
        quantity:8,
        pricePerItem:5
    },
    {
        name:'Berry',
        quantity:4,
        pricePerItem:8.3
    }
];


const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.pricePerItem,0)
console.log(priceToPay)