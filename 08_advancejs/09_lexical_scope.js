//Lexical scoping means variable declared in the outer function can be used by the inner function.
//We can make a lot of inner functions inside the outer functions.
//Inner functions can use the variables declared in the outer functions.
//But the innerTwo functions can not use the variables declared in the inner function.
//(like things can not be shared between bhai-bhai)



function outer()
{
    let username='Hitesh221';
    let password='hitesh@1234';
    function inner()
    {
        let name='Hitesh Chaudhary'
        console.log(username);
    }
    function innerTwo()
    {
        console.log(password);
        //console.log(name);  (name is not defined)

    }
    inner();
    innerTwo();
}
outer();