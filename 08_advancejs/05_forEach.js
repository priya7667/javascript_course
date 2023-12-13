let arr=[8,9,7,6,3,2];

//Here we have printed each element of the array with adding 1 to each element.
arr.forEach((a)=>
{
     console.log(a+1);
});
console.log(arr);

//Here we have printed printed hello in front of every element.
arr.forEach((a)=>
{
     console.log("Hello",a);
});

//Sum of each elements
let sum=0;
arr.forEach((a)=>
{
    sum+=a;
})
console.log(sum);


//Printing index of the array,elements of the array and the actual array

arr.forEach((a,index,arr)=>
{
   console.log(a,index);
   
});

console.log(arr);

//Add every number except the string
let s=0;
let myNum=[1,2,'3',4,5];
myNum.forEach(function(val)
{
    if(typeof val==='number')
    {
        s=s+val;
    }
})
console.log(s);
