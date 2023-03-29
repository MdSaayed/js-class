// var fname, lastName, fullName, userEmail;

// fname = 'Sayed ';
// lastName = 'Khan';
// fullName = fname + lastName;
// userEmail = "mdsayed.contact@gamil.com";

// document.write(fullName);


var navWrapper = document.querySelector('.nav-wrapper');
var navItem = navWrapper.children[3];
var next = navItem.previousElementSibling;

navItem.style = 'background-color:red';
next.style = 'background-color:red';