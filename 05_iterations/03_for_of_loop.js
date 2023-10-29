let country=['USA','India','France','New Zealand']
console.log('Name of countries are:-->');
for(let value of country)
{
    console.log(value);
}

let name='Hello World'
for (let person of name)
{
    //console.log(person);
}


//For of loop used in Map
let map=new Map();
map.set('IN','India')
map.set('USA','United States of America')
map.set('UK','United Kingdom')
for(let [countries,value] of map)
{
    console.log(countries,value);
}


//You can also declare map like
let map1=new Map([
    ['Geeks',1],
    ['For',2],
    ['Geeks',3]


]);
for(let entry of map1)
{
    console.log(entry);
}
for(let [entry,value] of map1)
{
    console.log(entry,value);
}