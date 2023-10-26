//Block scoped are defined inside a particular block and within curly braces and they can only accessed within that block


//let keyword
//1st example---(When we are trying to access the desc variable outside the myFunction() block)
function myFunction()
{
    let myName='Aviksha'
    console.log(myName); //Aviksha
    let desc='A perfect repo for all js developers'
    console.log(desc);

}
//console.log(desc); //It will throw an error because desc is applicable within myFunction() block.
myFunction();



//2nd example---(When we are trying to redeclare the variable with let keyword)
function myFunction2()
{
    var name='GFG'
    console.log(name);
    let desc='Hello Github family'
    //let desc='Welcom to GitHub'
    //console.log(desc);//desc has already been declared
    desc=' A new repo'
    console.log(desc);
    
}

myFunction2();


//const  keyword
//1st Example---(When we try to reassign the variable with const keyword)
function myFunction3()
{
    const name='Ankit Bedi'
    console.log(name);
    const desc='A new portal '
    //desc='Updated portal' //Assignment to constant variable
    console.log(desc);
}
myFunction3();

//2nd example---(When we are trying to access the variable outside the function)
function myFunction4()
{
    const name='Prerna Barriar'
    console.log(name);
    const desc='Accessing the desc variable outside the function'
    console.log(desc);
}
myFunction4()
//console.log(desc); //desc is not defined




