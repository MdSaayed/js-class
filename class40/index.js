
// var photos = ['pic1.jpg','pic2.jpg'];
// var slideItem = document.querySelector('#slider-img');

// var count = 0;
// function next(){
//     count++;
//     if(count >= photos.length){
//         count = 0;
//         slideItem.src = photos[count];
//     }else{
//         slideItem.src = photos[count];
//     }
// }

// function prev(){
//     count--;
//     if(count < 0){
//         count = photos.length - 1;
//         slideItem.src = photos[count];
//     }else{
//         slideItem.src = photos[count];
//     }
// }



var photos = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
var sliderImg = document.querySelector('#slider-img');


var count = 0;
function next(){
    count++;
    if(count >= photos.length){
        count=0;
        sliderImg.src = photos[count];
    }else{
        sliderImg.src = photos[count];
    }

}

function prev(){
    count--;
    if(count < 0){
        count=photos.length - 1;
        sliderImg.src = photos[count];
    }else{
        sliderImg.src = photos[count];

    }

}