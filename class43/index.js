var text = document.querySelector('#text');

for(var i = 0; i < 3; i++){
    var btn = document.querySelectorAll('.btn')[i];
    btn.addEventListener('click',function(){
        var x = this.innerHTML;
        text.innerHTML = x;
    });
}