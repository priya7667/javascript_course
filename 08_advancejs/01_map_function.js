const arr=[5,1,2,3,6];
const doubleNumbers=arr.map(num=>num*2);
console.log(doubleNumbers);

//Here we have an array i.e. arr1 where we have stored some numbers and we want to perform some calculations but also don't want 
//to mess with the original array.
//It is used when we want to transform each elements of the array
const arr1=[9,8,7,6,5];
let arr2=(num1)=>
{
    return num1*5;
}
let num2=arr1.map(arr2);
console.log(num2);
console.log(arr1);