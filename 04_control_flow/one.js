//  if statement
// const isUserLoggedIn = true
// const temperature = 41


// if (temperature < 50) {
//     console.log("Less than 50");
// } else {
//     console.log("temperature is greate than 50");
// }

// < , >, <= , >=, == , != , === , !==

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }

// const balance = 300
// //if(balance > 500) console.log("test"), console.log("test2");
// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if ( balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromgoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard) {
    console.log("Allow to buy course");
}
if (loggedInFromgoogle || loggedInFromEmail) {
    console.log("User Logged in");
}


