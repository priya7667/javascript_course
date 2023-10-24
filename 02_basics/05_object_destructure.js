//Basic Object Destructuring
let student=
{
   name:'Aman',
   age:25,
   city:'Ahmedabad'
}
 let{name,age,city}=student
 console.log(name);
 console.log(age);
 console.log(city);






//Object destructuring and rest operator
let p=
{
    x:20,
    y:30,
    z:21,
    a:90,
    b:76
}
let{x,y,...args}=p
console.log(x);
console.log(y);
console.log(args);


//Assigning new variable names
let num=
{
    a1:23,
    a2:24

}
let{a1:n1,a2:n2}=num
console.log(n1); //23
console.log(n2); //24

//Assignment without declaration
let name1,division
({name1,division}={name1:'Amit',division:'first'})
console.log(name1);
console.log(division);