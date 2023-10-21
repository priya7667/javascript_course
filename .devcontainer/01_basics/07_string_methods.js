// const str='code explained'
// console.log(str.length); //14

// const s='The code undefined code code'
// console.log(s.indexOf('code'));
// console.log(s.lastIndexOf('code'));
// console.log(s.indexOf('code',4)); //4
// console.log(s.indexOf('code',3)); //4
// console.log(s.indexOf('code',5)); //19
// console.log(s.lastIndexOf('code',24))  //24
// console.log(s.lastIndexOf('code',23)) //19
// console.log(s.indexOf('')); // 0
// console.log(s.lastIndexOf('')) //28
// console.log(s.indexOf('code',-5)); //4
// console.log(s.lastIndexOf('code',-5)); //-1

// const s='The morning is upon us'
// console.log(s.slice(12)); //is upon us
// console.log(s.substring(12)); //is upon us
// console.log(s.slice(-11)); //is upon us
// console.log(s.substring(-11)); //'The morning is upon us'(Substring will start from zero in case of negative number)
// console.log(s.slice(23)); //''
// console.log(s.substring(23)) //''
// console.log(s.slice(13,16)) //'s u'
// console.log(s.substring(13,16)) //'s u'
// console.log(s.slice(16,13)) //''
// console.log(s.substring(16,13)) //'s u'
// console.log(s.slice(-8,-4)); //'upo'
// console.log(s.substring(-8,-4)); //''
// console.log(s.slice(-8,4)); //''
// console.log(s.substring(-8,4)); //'The'
// console.log((s.slice(8,-4))); //'ing is upo'
// console.log(s.substring(8,-4)); //'The morn'

//Split method
const string='The morning is upon us'
const arr=string.split()
console.log(arr);
const arr1=string.split('')
console.log(arr1);
const arr2=string.split(' ')
console.log(arr2);
const arr3=string.split('o')
console.log(arr3);
const arr4=string.split('o',2)
console.log(arr4);








