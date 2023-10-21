let date=new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

// let myDate=new Date(2023,0,5)
// console.log(myDate.toLocaleString());

let myDate=new Date('05-01-2001')
console.log(myDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth()+1);


