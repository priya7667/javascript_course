function calculateCartPrize(num1,num2,...num3)
{
    return num3
}
console.log(calculateCartPrize(1,2,7,9,7));



//Rest Parameters(It is used to represent infinite number of arguments as an array)
function calculatePrize(...num1)
{
    return num1
}
console.log(calculatePrize(250,200,600,800))
  

//Functions with arrays

let myNewArray=[200,300,400,500,600]
function returnSecondValue(getArray)
{
     return getArray[1]
}
console.log(returnSecondValue(myNewArray));


//Functions with objects
let user=
{
    username:'Ananta',
    price:1999
}
function returnValue(getObject)
{
    return getObject
}
console.log(returnValue(user));

