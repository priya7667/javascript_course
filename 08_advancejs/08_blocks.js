//Block statement is used to group zero or more statements.
//It is also known as compound statements in other languages.
//Variables declared with var do not have a block scope.
//But variables decalared with let and const have a block scope.

let x=90;
var y=70;
const z=65
{
   let x=80;
   var y=98;
   const z=76;
    
}
console.log(x); //90
console.log(y); //98;
console.log(z); //65