const accountId = 144553
let accountEmail = "pramin@hotmail.com"
var accountPassword = "12345"
accountCity  = "Kathmandu"

// accountId = 2 // Not Allowed
/* 
Prefer not to use var because of 
issue in block scope and functional scope.
*/
accountEmail = "hc@hc.com"
accountPassword = "67890"
accountCity = "Biratnagar"
let accountState
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])