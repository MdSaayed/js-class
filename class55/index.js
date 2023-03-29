var dropArea  = document.querySelector('.container');
var dropArea2  = document.querySelector('.container2');
var dragItem  = document.querySelector('#drag__item');

dragItem.addEventListener('dragstart',function(e){
    e.dataTransfer.setData('item',e.target.id);
});
dropArea.addEventListener('dragover',function(e){
    e.preventDefault();
});
dropArea.addEventListener('drop',function(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('item');
    var id =document.getElementById(id);
    dropArea.appendChild(id);
});


dropArea2.addEventListener('dragover',function(e){
    e.preventDefault();
});
dropArea2.addEventListener('drop',function(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('item');
    var id =document.getElementById(id);
    dropArea2.appendChild(id);
});













// var drop = document.querySelector('.container');
// var drop2 = document.querySelector('.container2');
// var drag = document.querySelector('#drag__item');

// //select drag item
// drag.addEventListener('dragstart',function(e){
//     e.dataTransfer.setData('item',e.target.id);
// });

// //drop area
// drop.addEventListener('dragover',function(e){
//     e.preventDefault();
// });
// drop.addEventListener('drop',function(e){
//     e.preventDefault();
//     var id = e.dataTransfer.getData('item');
//     drop.appendChild(document.getElementById(id));
   
// });


