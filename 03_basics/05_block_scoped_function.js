//1)Nested functions

function myFunction()
{
    let age=22
    function myFunction2()
    {
        let newage=23
        console.log(age); //Child function can access the properties of parent function
        console.log(newage);
    }
    myFunction2()
}
myFunction()
//console.log(newage);  new age is not defined means the parent function cannot access the properties of child function


//2)Functions written inside a conditional statement
if(true)
{
    let myfavColor='Orange'
    function myFunction3()
    {
       let myColor='Purple'
       console.log(myfavColor); //Orange
       console.log(myColor); //Purple
    }
    myFunction3()
}