const students = [];
const addStudentForm = document.querySelector("#addStudent");
const tableBody = document.querySelector(".tableBody");
const renderStudents = () => {
  tableBody.innerHTML = "";
  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>
    <button class="btn btn-secondary" onclick="editStudent(${index})">Edit</button>
    <button class="btn btn-danger" onclick="deleteStudent(${index})">Delete</button>
  </td>
  `;
    tableBody.appendChild(row);
  });
};
const addStudent = (name, age) => {
  const id = students.length + 1;
  const student = { id, name, age };
  students.push(student);
  renderStudents();
};

addStudentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const age = event.target.elements.age.value;
  addStudent(name, age);
});
const editStudent = (index) => {
  student = students[index];
  const name = prompt("Enter the student name : ");
  const age = prompt("Enter the student age : ");
  students[index] = { ...student, name, age };
  renderStudents();
};
const deleteStudent = (index) => {
  var result = confirm("Are you sure you want to delete this item?");
  if (result) {
    students.splice(index, 1);
    renderStudents();
  }
};
addStudent("abdelfattah", 21);
addStudent("mohamed", 29);
