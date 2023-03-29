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

var myDiv = document.querySelector('#myDiv');
myDiv.style = 'background-color:green; padding: 1em; margin-bottom:5em';

var addNew = document.createElement('h2');
var text = document.createTextNode('Hello baby');
addNew.appendChild(text);
myDiv.appendChild(addNew);

//var remove = document.getElementsByTagName('h2')[2];
//myDiv.removeChild(remove);


//add element own position
var addBefore = document.getElementsByTagName('h2')[2];

var addNew  = document.createElement('p');
var text = document.createTextNode('This is paragraph');
addNew.appendChild(text);
myDiv.insertBefore(addNew,addBefore);







