let info=
{
    name:'Amit',
    age:25,
    city:'Ranchi'
}
let info2=info
console.log(info2);
// In this case,memory is stored in heap.

let n1=67;
let n2=n1;
n2=90;
console.log(n1);
console.log(n2);