// Singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Pramin",
    "full name": "Pramin Ghimire",
    [mySym]: "mykey1",
    age: 22,
    locatioin: "Kathmandu",
    email: "pramin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "pramin@chatgpt.com" // change value
//Object.freeze(jsUser) // lock the value
jsUser.email = "pramin@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

