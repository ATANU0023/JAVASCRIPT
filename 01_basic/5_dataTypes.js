/* Datatypes is 2 types 
    1.primitive datatype
        7 types :
                a. string
                b. Number
                c. boolean
                d. null
                e. undefined
                f. bigint (New in ECMAScript 6)
                g. symbol (unique)
                
    2.non-primitive datatype(Reference type)
            a. array
            b. objects
            c. functions

    ## Javascript is Dynamically typed language
        - which means that data types of variables are determined by the value they hold
        at runtime and can change throughout the program as we assign different values to them.

*/

/*
const score =100
const sValue =100.3
const isLoggedIn = false
const outsidetemp = null

const id = Symbol('124')
const anotherId = symbol('124')  //tough the number is same but the they are differnt because of symbol.
console.log(id == anotherId) // output => false

const bigNumber = 1343546465354463454n //bigInt

*/

const fruits = ["mango" , "apple","banana","pinaple"]; // array
console.log(fruits);

let myObject ={         //object
    name: "atanu",
    age : 20
}

//function(){}; //function declaration
const myFunction = function(){  //store the function in a variable
    console.log("hello world");
} 

console.log(typeof myFunction) //output => fuction it's called object function

/*
Type	                            Result

Undefined	                       "undefined"
Null	                            "object" (reason)
Boolean	                            "boolean"
Number                          	"number"
BigInt	                            "bigint"
String	                            "string"
Symbol	                            "symbol"
Function (implements [[Call]]
 in ECMA-262 terms; classes
 are functions as well)	            "function"
Any other object	                "object"


##********************* The history of “typeof null”  *****************

[2013-10-29] dev, javascript, jslang, jshistory
Update 2013-11-05:
 I take a look at the C code of typeof to better explain why typeof null results in 'object'.
In JavaScript, typeof null is 'object', which incorrectly suggests that null is an object (it isn’t, it’s a primitive value, consult my blog post on categorizing values for details). This is a bug and one that unfortunately can’t be fixed, because it would break existing code. Let’s explore the history of this bug.
The “typeof null” bug is a remnant from the first version of JavaScript. In this version, values were stored in 32 bit units, which consisted of a small type tag (1–3 bits) and the actual data of the value. The type tags were stored in the lower bits of the units. There were five of them:

000: object. The data is a reference to an object.
1: int. The data is a 31 bit signed integer.
010: double. The data is a reference to a double floating point number.
100: string. The data is a reference to a string.
110: boolean. The data is a boolean.
That is, the lowest bit was either one, then the type tag was only one bit long. Or it was zero, then the type tag was three bits in length, providing two additional bits, for four types.
Two values were special:

undefined (JSVAL_VOID) was the integer −230 (a number outside the integer range).
null (JSVAL_NULL) was the machine code NULL pointer. Or: an object type tag plus a reference that is zero.
It should now be obvious why typeof thought that null was an object: it examined its type tag and the type tag said “object”. The following is the engine’s code for typeof.
    JS_PUBLIC_API(JSType)
    JS_TypeOfValue(JSContext *cx, jsval v)
    {
        JSType type = JSTYPE_VOID;
        JSObject *obj;
        JSObjectOps *ops;
        JSClass *clasp;

        CHECK_REQUEST(cx);
        if (JSVAL_IS_VOID(v)) {  // (1)
            type = JSTYPE_VOID;
        } else if (JSVAL_IS_OBJECT(v)) {  // (2)
            obj = JSVAL_TO_OBJECT(v);
            if (obj &&
                (ops = obj->map->ops,
                 ops == &js_ObjectOps
                 ? (clasp = OBJ_GET_CLASS(cx, obj),
                    clasp->call || clasp == &js_FunctionClass) // (3,4)
                 : ops->call != 0)) {  // (3)
                type = JSTYPE_FUNCTION;
            } else {
                type = JSTYPE_OBJECT;
            }
        } else if (JSVAL_IS_NUMBER(v)) {
            type = JSTYPE_NUMBER;
        } else if (JSVAL_IS_STRING(v)) {
            type = JSTYPE_STRING;
        } else if (JSVAL_IS_BOOLEAN(v)) {
            type = JSTYPE_BOOLEAN;
        }
        return type;
    }

*/