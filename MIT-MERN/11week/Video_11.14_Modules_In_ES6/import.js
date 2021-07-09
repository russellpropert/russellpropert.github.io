import {user} from './export.js';

const student = user('Peter Parker', 18);
student.printName();
student.printAge();
console.log(student);
//screen output
document.getElementById('output').innerHTML = `The student's name is ${student.name}<br>`;
document.getElementById('output').innerHTML += `The student's age is ${student.age}`;