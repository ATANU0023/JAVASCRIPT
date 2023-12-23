/*
Memory in js 
    1. stack(Primitive)
        when memory define under the heap we get the copy of the variable

    2. Heap(Non-primitive)
        but in heap we get the reference
*/

let myName = "heloworld"
let anotherName = myName
anotherName = "javascript"

console.log(anotherName)
console.log(myName)

let user = {
    email : "helo43@gmail.com",
    upi : "user@ybl"
}

let user2 = user

user2.email = "atanu@gamil"
console.log(user.email)
console.log(user2.email)

// go and check diagram of heap  and stack

// https://www.tldraw.com/r/U7uuNbqq_VSRGFY4Tmku0?viewport=-0,-350,1537,750&page=page:page