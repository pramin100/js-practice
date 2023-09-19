// Primitive 

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNunmber = 34567890934343133444443n



// Reference (Non- primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "hitesh",
    age: 22,
}

const myFunction = function (){
    console.log("Hello World");
}

//console.log(typeof bigNunmber);


// ***********************************************************

// stack (Primitive), Heap(Non-primitive)

let myYoutubename = "praminghimiredotcom"

let anotherName = myYoutubename
anotherName = "chaiaourcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "test@test.com"

}

let userTwo= userOne

userTwo.email = "pramin100@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);