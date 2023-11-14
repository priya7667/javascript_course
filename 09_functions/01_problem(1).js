//Example to understand execution context in the browser
//To keep the track of all the execution context,the js engine uses the call stack.


var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10; 
    console.log(x);
}

function b() {
    var x = 100; 
    console.log(x);
}
