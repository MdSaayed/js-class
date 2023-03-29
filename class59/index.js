var show = document.querySelector('.show');

function clock(){
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var sec = date.getSeconds();

    var hrs = timeFormate(hrs);
    var mins = timeFormate(mins);
    var sec = timeFormate(sec);
    var dn = 'am';

    if(hrs > 12){
        hrs = hrs - 12;
        dn = 'pm';
    }

    var time = hrs+':'+mins+':'+sec+dn;
    show.innerHTML = time;
    setInterval(clock,1000);
}

function timeFormate(value){
    if(value<10){
        value = '0'+value;
    }
    return value;
}
clock();
