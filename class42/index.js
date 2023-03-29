
var btn = document.querySelector('.btn');
btn.addEventListener('mouseover',mOver);
btn.addEventListener('mouseout',mOut);

function mOver(){
    btn.classList.add('addClass');
}
function mOut(){
    btn.classList.remove('addClass');
}