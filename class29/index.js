var number1 = [23,55,78,23,97,34,67,100];
var number2 = [23,55,78,23,97,34,67];

function check(num){
    var max = num[0];
    for(var i=0; i<num.length; i++){
        if(max<num[i]){
            max = num[i];
        }
    }
    document.write(max);
}
check(number1);
