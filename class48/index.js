var form = document.querySelector('form');
var fname = form.querySelector('#name');
var email = form.querySelector('#email');
var password = form.querySelector('#password');

form.addEventListener('submit',myFunc);

function myFunc(e){
    e.preventDefault();
    var user = {
        fname: fname.value,
        email: email.value,
        password: password.value,
    }
    console.log(user);
}



// var form = document.querySelector('form');
// var fname = form.querySelector('#name');
// var email = document.querySelector('#email');

// form.addEventListener('submit',myFunc);

// function myFunc(e){
//     e.preventDefault();
//     const user = {
//         fname: fname.value,
//         email: email.value,
//         password: password.value,
//     }
//     console.log(user);
//     fname.value = '';
//     email.value = '';
//     password.value = '';
// }