//global scope==> When a function is defined outside of any function or scope.

let a="Aman";
function f()
{
    console.log("hello" + a); //

}
f();
console.log(a);

//local scope==> when a function is defined within a function or block.
function f1()
{
    let name="Sanskrit"
    console.log("Hello"+name)
}
f1();
// console.log(name) name is not defined 