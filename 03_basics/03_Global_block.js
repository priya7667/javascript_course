//Block Scope and Global scope
let a=100

if(true)
{
    let a=30
    let b=40
    console.log(`Inner Block ${a}`);
}
console.log(a);

function foo()
{
    if(true)
    {
        var x=1 //Exists in function scope

        let y=2 //Exists in block scope
        let z=4 //Exists in block scope
    }
    console.log(x); 
    // console.log(y);
    // console.log(z);
}
foo();