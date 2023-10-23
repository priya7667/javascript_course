//Destructing means breaking a complex structure into smaller parts.
//With the syntax of destructing,you can extract smaller fragments from array.
//Destructuring is an efficient way to extract multiple values from data that is stored in arrays.

let arr=['hello','world']

let[arr1,arr2]=arr
console.log(arr1); //hello
console.log(arr2); //world


//It is the condition when we want to choose random values from the array
let colors=['violet','orange','green','red','blue']
let[color1,,,color4]=colors 
console.log(color1);
console.log(color4);

//By using the rest operator in array destructuring, we put all the remaining elements of an array in a new  array
let [a,b,...args]=colors
console.log(a);
console.log(b);
console.log(args);



