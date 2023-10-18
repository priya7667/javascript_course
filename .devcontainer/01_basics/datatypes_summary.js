//Two types of datatype
//1)Primitive 
//7 types-- 
// String, Number,Boolean,Null,Undefined,Symbol,BigInt



let score=24;
//We don't define the type of the variable in javascript

let p1=90;
let p2=90.56;
//Both are categorized under the same data type i.e. number

const isLoggedIn=false 
const temp=null  //Here temperature is empty not null. Null never means the value is zero.
let userEmail; //It means undefined like the variable is declared but doesn't initialized.

const id=Symbol('123')
const anotherId=Symbol('123');
console.log(id===anotherId);


//2)Non-Primitive Type(Reference Type)
//Array,Objects,Functions


const arr=['aman','niraj','rani']
let myobj=
{
    name:'Priyanjali',
    age:23,
    city:'Ranchi'
}

console.log(typeof myobj); //object
console.log(typeof arr); //object

