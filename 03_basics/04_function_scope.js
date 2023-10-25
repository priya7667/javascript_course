//Nested function scope(Child functions can access the properties of parent function)


function one()
{
    const username='Hitesh'
    function two()
    {
        const website='Youtube'
        console.log(`Username is: ${username}`);//function two can access the properties of function one
    }
    //console.log(`Website name is: ${website}`); //function one cannot access the properties of function two
    two()

}
one()

