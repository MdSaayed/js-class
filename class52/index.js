var textarea = document.querySelector('textarea');
var results = document.querySelector('#result');

textarea.addEventListener('keydown',function(e){
    if(e.repeat){
        results.innerHTML = 'Do not reapet';
    }
});



// textarea.addEventListener('keydown',function(e){
//     console.log('Keydown');
// });
// textarea.addEventListener('keyup',function(e){
//     console.log('Keyup');
// });
