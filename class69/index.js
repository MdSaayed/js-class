// for array 
let names = ['Sayed','Shakib','Tamim','Mustafiz'];

for(let name of names){
    //document.write(name);
}

//for object

let students = {
    name: 'sayed',
    age: 24,
    cgpa: 3.11
}
for(let x in students){
    document.write(`${x} ${students[x]}<br>`)
}