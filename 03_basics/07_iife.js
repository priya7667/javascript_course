//Previous method of declaring the function
function greet()
{
    console.log("Helloo functions");
}
greet();

//Immediately invoked function expressions
(function()
{
    console.log('Hello monday');
})();


//With arrow functions
(()=>
{
    console.log('Hello arrow function');
})();

//IIFE will only be invoked when we call the parent function.
function myFunction()
{
    console.log('Welcom to');
    (function()
    {
        console.log('The world of javascript');
    })();
}
myFunction()