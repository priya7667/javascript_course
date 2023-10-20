const name="amit"
const countRepo=60
console.log(name+countRepo+"value");
//This way of concatenating strings is not a good practice 


console.log(`Hello my name is ${name} and my countRepo is ${countRepo}`);
//It is good way to conactenate the strings in ES6 with string interpolation.



//String Methods
const newString='      Hitesh    '
console.log(newString);
console.log(newString.trim()); // trim removes whitespaces from both sides of the string

const url='hitesh%t@gmail.com'
console.log(url.replace('%t','-')) //replace method replaces a part of the string with a new string
console.log(url.includes('hitesh')) //true

