function abcd()
{
     var x=90;
     return function()
     {
        console.log(x);
     }
}
let ans=abcd();
ans();