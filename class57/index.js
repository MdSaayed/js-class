//alert box
//alert('Hello');

//confirm box
// function myFunction(){
//     var x = confirm('Are You sure?');
//     if(x){
//         document.write('Item is deleted.');
//     }else{
//         document.write('Item is not delete.');
//     }
// }
// myFunction();


//promt



function msg(){
    var msgT = document.createElement('h1');
    var text;
    var name = prompt();
        if(name==null || name==''){
            var text = 'Name not found.';
        }else{
            var text = name;
        }
    var newText  = document.createTextNode(text);
    msgT.appendChild(newText);
    document.body.appendChild(msgT);
}
msg();