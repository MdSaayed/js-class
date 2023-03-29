
//default 
function info(name = 'Sayed',age = 24){
    var name = name;
    var age = age;
    document.write(`Name: ${name}<br> Age: ${age}<br>`);
}
info('Misty',15);


//reset
function sum(x,y,...z){
    var x = x;
    var y = y;
    var z = z;
    document.write(`The sum is ${x+y} and z = ${z}`);
}
sum(3,15,87,789);

