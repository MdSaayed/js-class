var text = document.querySelector('#text');

text.addEventListener('focus',function(){
    text.style = 'padding:3em';
});

// text.addEventListener('focusin',function(){
//     text.style = 'background-color:red; border:none';
// });

// text.addEventListener('focusout',function(){
//     text.style = 'background-color:yellow; border:none';
// });

text.addEventListener('blur',function(e){
    text.value = e.target.value.toUpperCase();
    text.style = 'background-color:green; border:none;';
});







