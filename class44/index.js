for(var i=0; i<3; i++){
    var btn = document.querySelectorAll('.btn')[i];
    btn.addEventListener('click',function(){
        var text = this.innerHTML;
        myPlayer(text);

    });
}

function myPlayer(text){
    switch(text){
        case 'A':
            var audio = new Audio('a.mp3');
            audio.play();
            break;
        case 'B':
            var audio = new Audio('b.mp3');
            audio.play();
            break;
        case 'C':
            var audio = new Audio('c.mp3');
            audio.play();
            break;
    }
}