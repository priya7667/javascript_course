//Filter method in js
// It is also used when you don't want to mess with the original array.
// It is used to filter the array based on some conditions.



let a1=[2,4,6,13,18,21];
let a2=(num)=>
{
    return num%3==0;
}
let a3=a1.filter(a2);
console.log(a3);