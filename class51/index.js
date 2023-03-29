var myDiv = document.querySelector('.my-Div');
var result = document.querySelector('#result');

// myDiv.addEventListener('click',myFunction);
// function myFunction(){
//     result.innerHTML = 'Clicked';
// }

// myDiv.addEventListener('dblclick',dblClick);
// function dblClick(){
//     result.innerHTML = 'Dblclicked';
// }

// myDiv.addEventListener('mouseover',over);
// function over(){
//     result.innerHTML = 'Mouseover';
// }

// myDiv.addEventListener('mousemove',move);
// function move(){
//     result.innerHTML = 'Mousemove';
// }

// myDiv.addEventListener('mousedown',down);
// function down(){
//     result.innerHTML = 'Mousedown';
// }

// myDiv.addEventListener('mouseup',up);
// function up(){
//     result.innerHTML = 'Mouseup';
// }

// myDiv.addEventListener('mouseenter',enter);
// function enter(){
//     result.innerHTML = 'Mouseenter';
// }

// myDiv.addEventListener('mouseleave',leave);
// function leave(){
//     result.innerHTML = 'Mouseleave';
// }


//===========example================//

/// myDiv.addEventListener('mousemove',xValue);
// function xValue(e){
//     var xValue = e.offsetX;
//     var YValue = e.offsetY;
//     result.innerHTML = 'ClientX = '+xValue+ ' ClientY = '+YValue;
// }
// myDiv.addEventListener('mousemove',cxy);
// function cxy(e){
//     var xValue = e.clientX;
//     var YValue = e.clientY;
//     result.innerHTML = 'ClientX = '+xValue+ ' ClientY = '+YValue;
// } 

// myDiv.addEventListener('click',myFunc);
// function myFunc(e){
//     var text = e.target.innerHTML;
//     result.innerHTML = text;
// }

var btns = document.querySelectorAll('.btn');

Array.from(btns).map((btn)=>{
    btn.addEventListener('click',myx);
})
function myx(e){
    result.innerHTML = e.target.innerHTML;
}


