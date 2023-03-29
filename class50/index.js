var svg = document.querySelector('svg');
var result = document.querySelector('#result');
window.addEventListener('load',function(){
   svg.style = 'display:block';
});
window.addEventListener('unload',function(e){
    var loading = e.target.value;
    result.innerHTML = 'Unload';
 });

window.addEventListener('scroll',function(){
    result.innerHTML = 'Scroll';
});


//body backgorund change
var body = document.querySelector('body');
window.addEventListener('resize',function(){
    var width = window.outerWidth;
    var ht = window.outerHeight;
    if(width <= 800){
        body.style.backgroundColor = 'red';
    }else{
        body.style.backgroundColor = 'white';
    }
    result.innerHTML = 'Width'+width+'/ Height'+ ht;
});

var toggle = document.querySelector('details');
toggle.addEventListener('toggle',function(e){
    //var text = e.target.open;
    var text = e.target.open;
    result.innerHTML = 'Clicked on toggle '+ text;
});