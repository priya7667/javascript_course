
const tmp=51

if(tmp==='50')
{
    console.log(`Temperature is less than 50`);
}
else{
    console.log(`Temperature is greater than 50`);
}
console.log(`100%,it will be executed`);

//Scope of var is global but scope of let and const is local

const score=200
if(score>100)
{
    const power=90
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`); //Not execute because const scope is within if block only


const userLoggedIn=true
const debitCardUser=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCardUser)
{
    console.log('Allow to buy the courses');
}
if(loggedInFromEmail|| loggedInFromGoogle)
{
    console.log('You can login now');
}

