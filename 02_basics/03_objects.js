
const mysym=Symbol('key1')

const person=
{
    name : 'Ankit Raj',
    "fullName": "Ankit Rajwanshi",
    age : 23,
    location: "Jaipur",
    isLoggedIn:false,
   [mysym]:'mykey1',
    email:'priya@gmail.com',
    lastLoginDays:['Monday','Thursday'],
    
}
console.log(person.email); //Accessing the objects
console.log(person['email']); //We can accss the object like this
console.log(person["fullName"]);

console.log(person[mysym]);

person.email='priya@chatgpt.com'
console.log(person);
//Object.freeze(person)
// person.email='priya@yahoo.com'
// console.log(person);

person.greeting = function()
{
    console.log("Hello JS User");
}

person.greeting2=function()
{
    console.log(`Hello JS User,${this.name}`);
}
console.log(person.greeting());
console.log(person.greeting2());
