//It reduces an array to a single value by performing the desired operation on the elments collectively.


let arrNum = [15, 39, 20, 32, 30, 45, 22];
let newarr=(num,index)=>
{
    return num+index;
}
let arrNum2=arrNum.reduce(newarr);
console.log(arrNum2);
console.log(arrNum);


//map transforms each element, filter selects elements based on a condition, and reduce combines elements into a single value. 