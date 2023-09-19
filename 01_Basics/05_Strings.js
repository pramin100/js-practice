const name = "Pramin"
const repoCount = 50

// console.log(name + repoCount)

// console.log('Hello my name is ${name} ');

const gameName = new String('pramin-ghimire')
// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-13,4)
console.log(anotherString);

const newStringOne = "     Pramin    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20',"-"));
console.log(url.includes('hitesh'));

console.log(gameName.split('i'));