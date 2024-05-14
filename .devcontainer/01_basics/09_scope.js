//global scope==> When a variable is defined outside of any function or scope.

let a="Aman";
function f()
{
    console.log("hello" + a); //

}
f();
console.log(a);

//local scope==> when a variable is defined within a function or block.
function f1()
{
    let name="Sanskrit"
    console.log("Hello"+name)
}
f1();
// console.log(name) name is not defined 

let b=10;
function f2()
{
    if(true)
        {
            let c=9;
            console.log(c)
        }
        // console.log(c) error because of block scope
}
f2();
console.log(b);