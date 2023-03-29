var btn = document.querySelector('.btn');
var message = document.querySelector('.message');

btn.addEventListener('click',()=>{
    message.innerHTML='User add successfully';
    message.style = 'display:block;';
        setTimeout(()=>{
            message.innerHTML='';
            message.style = 'display:none;';
        },2000); 
});

var cBtn = document.querySelector('.cBtn');
var countShow = document.querySelector('.countShow');

cBtn.addEventListener('click',()=>{
    var count = 1;
    countShow.innerHTML = count;
        setInterval(()=>{
            count++;
            countShow.innerHTML = count;
        },1000);
});

