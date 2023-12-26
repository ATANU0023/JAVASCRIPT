const usrEmail = "atanu45.ai"   //if here the value is present then it is called truthy value
//if not present then it is falsy value
/*
if(usrEmail){
    console.log(`got email ${usrEmail}`)

}else{
    console.log("no email")
}
*/

const mail = ""    //falsy value
if(mail){
    console.log("got mail")
}else{
    console.log("no mail")
}



/*
falsy values : 
                false , 0 , -0 , BinInt  0n , "" , null , undefined , NaN 

truthy vlues :
                "0" ,'false' (string) , " " , [] ,{}, function(){}  
*/

/*
const userMail = []  //the way to show any empty array

if(userMail.length === 0){
    console.log("array is empty")
}
*/

//find empty object

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty object")
}

/*
false == 0 ; => true
false == ' ' ; => true
0 == '' ; => true
true == '1' ; => true
null == undefined ; => true
NaN == NaN ; => false

*/
 //##################### NULLISH COALESCING OPERATOR (??) ##############################

/* The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand. */

/*
let val1 ;
val1 = 5 ?? 10
console.log(val1)

let val2 = null ?? 10 ;
console.log(val2)

// let val3 = undefined ?? null 
// console.log(val3)

let val4 = undefined ?? 23
console.log(val4)
*/

//###############  TERNARY OPERATOR  #################//

const starbucks = 200

starbucks <= 80 ? console.log("less then 80"): console.log("more then 80");