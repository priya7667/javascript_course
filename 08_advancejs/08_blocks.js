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


//Illegal Shadowing --> We can shadow var variable by let variable but the vice-versa is not possible,which means we cannot 
//shadow let variable by var variable.This is known as illeagal shadowing.
//eg.-->
function func()
{
   var a='Geeks';
   let b='Geeks';
   if(true)
   {
      let a='GeeksForGeeks'; //Legal Shadowing
      //var b='Geeks'; Illegal Shadowing
      console.log(a); //GeeksForGeeks
      //console.log(b);Error
   }
}
func();
