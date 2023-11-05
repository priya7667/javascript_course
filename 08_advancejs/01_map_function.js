const arr=[5,1,2,3,6]
function double(x)
{
    return x*2;
}
const output=arr.map(double);
console.log(output);



const result=arr.map(function triple(y)
{
    return y*3;
});
console.log(result);


function binary(z)
{
    return z.toString(2);
}
const res=arr.map((z) =>
{
    return z.toString(2);
});
console.log(res);