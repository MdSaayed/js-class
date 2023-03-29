var video = document.querySelector('video');
var result = document.querySelector('#result');

video.addEventListener('play',myFunc);
video.addEventListener('pause',myFuncP);
video.addEventListener('canplay',myFuncC);
video.addEventListener('playing',myFuncPlaying);
video.addEventListener('volumechange',myVol);

function myFunc(){
    var status = 'Play';
    result.innerHTML = status;
}
function myFuncP(){
    var status = 'Pause';
    result.innerHTML = status;
}
function myFuncC(){
    var status = 'CanPlay';
    result.innerHTML = status;
}
function myFuncPlaying(){
    var status = 'Playing';
    result.innerHTML = status;
}
function myended(){
    var status = 'Ended';
    result.innerHTML = status;
}
function myVol(){
    var status = 'Volume Changed';
    result.innerHTML = status;
}

