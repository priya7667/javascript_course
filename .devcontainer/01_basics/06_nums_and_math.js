const score=100
console.log(score);

const balance=new Number(100) //It specifically defines that it is a number data type
console.log(balance);
console.log(balance.toFixed(2));


const otherNumber=123.898
console.log(otherNumber.toPrecision(4));


const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math.abs(-4))  //4
console.log(Math.round(13.6))  //14
console.log(Math.round(13.2));  //13

console.log(Math.ceil(4.8)); //5
console.log(Math.floor(4.7))  //4
console.log(Math.max(3,5,7,1)); //7
console.log(Math.min(3,5,7,1)); //1

console.log(Math.random());
console.log((Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);