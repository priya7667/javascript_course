function sum(number1,number2)
{
     return number1+number2
}
let result=sum(2,5)
console.log("Result:"+result);

function loginUserName(username)
{
    if(username===undefined)
    {
        console.log('Please enter the username');
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserName('Aman'));
console.log(loginUserName()); //When we don't define anything


