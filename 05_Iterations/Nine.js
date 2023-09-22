const myNums = [1,2,3]


// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce( (acc, curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart =[
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Py course",
        price: 3999
    },
    {
        itemName: "Mobile Dev course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 12999
    }
]

const priceTopay =shoppingCart.reduce( (acc, item)=> acc+item.price,0)
console.log(priceTopay);