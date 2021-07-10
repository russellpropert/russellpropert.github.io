// Array Destructuring

const books = ['fiction', ['horror', 'literary'], 'science'];

const [fiction, [horror, literary], science] = books;

console.log(fiction);
console.log(horror);
console.log(literary);
console.log(science);

// Object Destructuring

const Student = {
  firstName: 'Joe',
  university: 'MIT',
  studentInfo: {
    studentid: 555,
  },
};

const {
  firstName,
  university,
  studentInfo: { studentid },
} = Student;

console.log(firstName);
console.log(university);
console.log(studentid);

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    fiction,
    horror,
    literary,
    science,
    firstName,
    university,
    studentid,
  };
}
