// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userFullname : {
            firstName : "Pramin",
            lastname : "Ghimire"
        }
    }
}

//console.log(regularUser.fullname.userFullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1, obj2} // cannot use it will show issue

//const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}

//console.log(obj3);

const users = [
    {
        id: 1, 
        email : "h@gmail.com"
    },
    {
        id: 2, 
        email : "g@gmail.com"
    }
]

//console.log(users[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "Js in hindi",
//     "price": "free"
// }