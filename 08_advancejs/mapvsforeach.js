
//Map method
//Map method transforms each element in the array.
//It doesn't transform the current array.


let myArr=[1,2,3,4,5,6];
console.log("Resulting Array:"+myArr.map(function(value)
{
    return value+=10;
})
);
console.log("Existing Array:"+myArr);

//forEach Method
//forEach doesn't transform each element in the array
//In this case,it doesn't transforms the original array.

let myArr1=[1,2,3,4,5,6];
console.log("Resulting Array:"+myArr1.forEach(function(item)
{
    return item+=10;
})
);
console.log("Existing array:"+myArr1); //Current array doesn't get modified.


let myArr2=[1,2,3,4,5,6];
let sum=0;
console.log(myArr1.forEach(function(item)
{
      sum+=item;
})
);
console.log("Sum:"+sum);
console.log("Existing array:"+myArr1); //Current array doesn't get modified.