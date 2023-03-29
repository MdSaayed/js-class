var text = document.querySelector('#text');
var result = document.querySelector('#result');

text.addEventListener('copy',function(){
    result.innerHTML = 'You have copied';
});
text.addEventListener('cut',function(){
    result.innerHTML = 'You have cut';
});
text.addEventListener('paste',function(){
    result.innerHTML = 'You have pasted';
});
