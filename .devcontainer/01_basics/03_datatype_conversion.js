let score="100";
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber)


let age="33abc"
console.log(typeof(age))
let convert=Number(age)
console.log(convert);

//"33"=>33 Easily converted to a number
//"33abc" => NaN
//true=>1
// false=>0


let isLoggedIn=true
let isBooleanLogged=Boolean(isLoggedIn)
console.log(isBooleanLogged);

//1 =>true
//0 =>false
//"" =>false
//"hitesh" => true

let someNumber=24
let conversion=String(someNumber)
console.log(conversion)
console.log(typeof(conversion))