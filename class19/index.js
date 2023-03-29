//Use of loop


var m= parseInt(prompt('Start number'));
var n= parseInt(prompt('End number'));

var sum = 0;
for(var x = m; x <= n; x = x + 1){
    sum = sum + x;
}
document.write(sum);

