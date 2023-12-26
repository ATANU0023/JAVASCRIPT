/*
const programmingLang = ['js','java','python','cpp','c']

const value = programmingLang.forEach((item)=>{
    console.log(item)
    return item;

})
console.log(value)  //for each don't return any value
*/
//if u open any scope "{}" then u must write "retun" keyword to return anything

/*
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums =myNums.filter((num)=> num>5)
console.log(newNums)
*/

/*
const againNewNums = myNums.filter((num)=>{
    return num>5
})
console.log(againNewNums)
*/
//using for each loop
/*
const newNums2 = []

myNums.forEach((num)=>{
    if(num>5){
        newNums2.push(num)
    }
})
console.log(newNums2)
*/

const books = [
    { title: 'book1' , genre: 'fiction', publish: '1981',edition: '2003'},
    {title: 'book2' , genre: 'non-fiction', publish: '1984',edition: '2002'},
    {title: 'book3' , genre: 'science', publish: '1983',edition: '2003'},
    {title: 'book4' , genre: 'history', publish: '1961',edition: '2004'},
    {title: 'book5' , genre: 'drama', publish: '1983',edition: '2007'},
    {title: 'book6' , genre: 'non-fiction', publish: '1989',edition: '2010'},
    {title: 'book7' , genre: 'fiction', publish: '2000',edition: '2019'},
    {title: 'book8' , genre: 'fiction', publish: '1900',edition: '2009'},
    {title: 'book9' , genre: 'history', publish: '2018',edition: '2006'},
    {title: 'book10' , genre: 'science', publish: '1999',edition: '2005'},
    {title: 'book11' , genre: 'drama', publish: '1989',edition: '2004'},
    {title: 'book12' , genre: 'fiction', publish: '1980',edition: '2023'},
];

/*
const userBooks = books.filter((book)=> book.genre === 'science')
console.log(userBooks)
*/

const userBooks2 = books.filter((book)=>{
    return book.publish>=1990 && book.genre == "fiction"
})
console.log(userBooks2)