const coding =["js","ruby","java","python","C++"]

// coding.forEach( function(item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding =[
    {
        languagName : "Javascript",
        languageFile : "js"
    },
    {
        languagName : "Java",
        languageFile : "java"
    },
    {
        languagName : "Python",
        languageFile : "py"
    }

]

myCoding.forEach((item,index)=>{
    console.log(item.languagName, index);
})