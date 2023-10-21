// const arr=[1,2,3,4,5]
// const arr1=[9,18,27,36]
// arr.push(arr1)
// console.log(arr);
// console.log(arr[5]);
// console.log(arr[5][1])

// const arr2=arr.concat(arr1)
// console.log(arr2)


const arr=[4,5,7,1,8]
const arr1=[9,10,11,12,13]
const arr2=[...arr,...arr1] //Spread operator
console.log(arr2);

console.log(Array.from('Priyanjali')) //every alphabet of the string is converted to an element of the new array instance 
let a=2
let b=3
let c=5
console.log(Array.of(a,b,c));//This creates an array from every argument passed into it.
console.log(Array.from([10, 20, 30]));

