for(let i=0;i<10;i++)
{
    const element =i
    if(element==5)
    {
        //console.log('5 is my lucky number');
    }
    //console.log(element);
}


let myArray=['Batman','Superman','Spiderman']
for(let i=0;i<myArray.length;i++)
{
    const element=myArray[i]
    //console.log(element);
}


//break 
for(let index=0;index<20;index++)
{
    if(index==5)
    {
        //console.log('Detected number 5');
        break;
    }
    //console.log(`Value of i is ${index}`);
}

//Continue
for(let index=0;index<20;index++)
{
    if(index==5)
    {
        console.log('Detected number 5');
        continue;
    }
    console.log(`Value of i is ${index}`);
}
