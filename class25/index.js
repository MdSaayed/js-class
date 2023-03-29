// IIFEs

(function display(num1,num2){
    var result = num1 + num2;
    document.write(result+'<br>');
})(20,20);


//function expretion
var callFunc = function display2(msg){
    var msg = msg;
    document.write(msg);
}
callFunc('I am message');