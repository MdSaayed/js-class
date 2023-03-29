
var NumOfWon = 0;
var NumOfLoss = 0;

for(var x=0; x<5; x++){
var guessNum = parseInt(prompt('Enter Your Number Form 1 to 5'));
var ranNum = Math.floor(Math.random()*6)+1;

    if(guessNum==ranNum){
       //document.write('You Have Won');
        NumOfWon++;
    }else{
        //document.write('You Have Lost');
        NumOfLoss++;
}

}
document.write('You Have Won '+NumOfWon+'Times'+'<br>');
document.write('You Have Lost '+NumOfLoss+'Times');