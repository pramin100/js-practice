const user = {
    username : "Pramin",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }


}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     console.log(this);
//     console.log(this.username);
// }
// chai()

// const chai = ()=>{
//     let username = "Pramin"
//     console.log(this);
// }
// chai()

//const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Pramin"});
console.log(addTwo(3,4));

