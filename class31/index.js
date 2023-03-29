//object and constructor

function checking(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    //constructor
    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.lang);
    }
}

var student1 = new checking('Sayed',27,4.4,['Bangla','English','Hindi']);
student1.display();





























// function Student(name,age,cgpa,lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
    
//     this.display = function(){
//         document.write('Name: ' + name + '<br>');
//         document.write('Age: ' + age + '<br>');
//         document.write('Cgpa: ' + cgpa + '<br>');
//         document.write('Lang: ' + lang + '<br>');
//     }
// }

// var Student1 = new Student('Sayed',24,3.03,['Bangla,English,Hindi']);
// Student1.display();




