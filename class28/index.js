var names = ['Sokina','Lima','karim','Misty','Sweety','Abbar'];
//names.pop();
//names.push('Shirina');


//Use of slice
// var newArray = names.slice(2,5);
// document.write(newArray+'<br><br><br><br>');

// for(var i=0; i<=4; i++){
//     document.write(names[i]+'<br>');
// }

//Use of slice
// names.splice(2,0,'Hafsa','Messi');
// for(var i=0; i<=4; i++){
//     document.write(names[i]+'<br>');
// }

var sorted = names.sort();
console.log(sorted);

//reverse
var rev = names.reverse();
console.log(rev);


var num = [3,10,1,5,20];
var revNum = num.sort(function(a,b){
    var num = b-a;
    return num;
});
console.log(num);
