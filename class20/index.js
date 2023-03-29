//Use of while loop

var sum = 0;
var i = 1;
while(i <= 50){
    if(i % 3 == 0 && i % 5 == 0){
    sum = sum + i;
    document.write(i + '<br>');
    }
    i++;
}
document.write(sum);
