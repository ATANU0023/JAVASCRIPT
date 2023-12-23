//singleton 

//const jsuser = new Object(); //singleton object


const jsuser = {}         // non singleton object

jsuser.id = "332aef"
jsuser.name = "sunny"
jsuser.isLoggedIn = false;

//console.log(jsuser);

/*

const regularUser = {
    email: "sunny@gmail.com",
    fullname:{
        userfullname:{
            firstname: "atanu",
            lastname: "pramanik"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

*/

/*

// Merge of object.
let obj1 ={1: "a", 2: "b"}
let obj2 = {3:"c", 4: "d"}

// let obj3 = Object.assign({},obj1 ,obj2)
//u can use sprade concept alsp
let obj4 = {...obj1,...obj2}  //suggested to use this process.
console.log(obj4);

const users = [
    {
        id: 1,
        email : "ap@gmail.com"
    },
    {
        id: 1,
        email : "ap@gmail.com"
    },
    {
        id: 1,
        email : "ap@gmail.com"
    }
]

//console.log(users[1].email) // to access the 1st value 

console.log(jsuser)
console.log(Object.keys(jsuser)); //retunt isn an array form.
console.log(Object.values(jsuser))
console.log(Object.entries(jsuser)) // => [key, values]

// to check whether it has the property or not

console.log(jsuser.hasOwnProperty("isLoggedIn")) // => true
console.log(jsuser.hasOwnProperty("isLogged")) // => false

*/

//d structuting

const course = {
    name : "JavaScript",
    price: 999,
    courseInstructor: "atanu"
} 

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor:instructor} =course  //courseInstructor name is so length so we d structure is to instructor.
console.log(instructor);