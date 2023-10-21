const myArr=[0,1,2,3,4,5]
console.log(myArr); //It will give the the original array
console.log(myArr[1]); //at position 1->1 
const newArr=myArr.join() //The values of array will be same but the it the square brackets are removed and typeof newArr will be string
console.log(newArr);  

console.log(myArr.push(6)); //It will add the element at the end of the array
console.log(myArr);

console.log(myArr.pop()); //It will remove one element from the end of an array
console.log(myArr);

myArr.unshift(25) //It will add the element at the starting of an array
console.log(myArr); 

myArr.shift() //It will remove that element at the start of an array
console.log(myArr);

console.log("A",myArr);
const myn1=myArr.slice(1,3) //It will take the element from index 1 and excludes 3 like(1,2)
console.log(myn1);

const myn2=myArr.slice() //It will print all the elements of the array since no argumnets passed to it.
console.log(myn2);

const myn3=myArr.slice(2)
console.log(myn3); // It will extract the array starting from index 2 till the end of the array

const arr=[19,20,34,78,90]
arr.splice(2,3)  //It will delete all the number from 2nd element
console.log(arr);

const arr1=['Amit','Sumit','Ritik','Aman','Manan']
const deleted=arr1.splice(2,3) //It will print the deleted elements
console.log(deleted);

const arr2=['ankit','shobhit','kislay','bhargav','amit']
const added=arr2.splice(2,3,'abhishek','shivam') //It will add the elemnts after 2 and remove the element after shobhit
console.log(arr2);

const arr3=[12,24,36,48,60,72]
const add1=arr3.splice(2,0,84,96) //It will not  remove the element but it will add the element after 2nd element
console.log(arr3);