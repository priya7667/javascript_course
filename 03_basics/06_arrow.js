const add=(num1,num2) => //When we are using curly braces then we need to include the return statement with curly braces
{
    return num1+num2
}
console.log(add(2,5));


const addOne=(n1,n2)=>(n1+n2) // Single line way to declare arrow function
console.log(addOne(7,8))

const value=(a,b)=>(a*b)
console.log(value(8,9));


const value1=(a1,b1)=>
{
    return a1*b1
}
console.log(value1(9,7));

//When there are more than one line to process,then we cannot declare the arrow function in one line
const value2=(a2,b2)=>
{
    c=5
    return (a2+b2)*c
}
console.log(value2(2,5));