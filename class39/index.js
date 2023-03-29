var myBtn = document.querySelector('#para');
var myImg = document.querySelector('#myImg');

function myFunc(){
    myBtn.innerHTML='Hello Baby 1';
    myBtn.style = 'color:red; font-size:2em; background:green; text-align:center;';
    myImg.src = 'pic2.jpg'

}
function myFunc2(){
    myBtn.innerHTML='Hello Baby 2';
    myImg.src = 'pic1.jpg'


}

///click hyper link

var link = document.querySelector('#myId');

function myLink(){
    link.href = 'https://www.w3school.com';
}


//add child

var myDiv  = document.querySelector('#myDiv');
myDiv.style = 'background-color:green; padding:1rem';

var addElement = document.createElement('h2');
var text = document.createTextNode('Hello Baby');
addElement.appendChild(text);
myDiv.appendChild(addElement);

var reMove = document.querySelector('h2');
myDiv.removeChild(reMove);









