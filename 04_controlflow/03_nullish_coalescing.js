//1st case---Here 'someValue' is undefined or null,so it will return the right hand value i.e. 'defaulValue'

const someValue=null
const defaultValue='Hello,World'
const result=someValue??defaultValue
console.log(result);

//2nd case--- Here if 'someValue1' is any other falsy value other than null or undefined ,
//then it will return the left hand value i.e.'someValue1'
const someValue1=0
const defaultValue1='Hello,World'
const result1=someValue1??defaultValue1
console.log(result1);

