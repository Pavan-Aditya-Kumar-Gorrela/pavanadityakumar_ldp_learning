const themeBtn = document.getElementById('themeBtn');
const searchInput = document.getElementById('searchStudent');
const filterInput = document.getElementById('departmentFilter');
const sortInput = document.getElementById('sortStudents');
const studentForm = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const cgpaInput = document.getElementById('cgpa');
const deptInput = document.getElementById('department');
const studentContainer = document.getElementById('studentContainer');
const totalStudentsElement = document.getElementById('totalStudents');
const highCGPAElement = document.getElementById('highestCGPA');
const avgCGPAElement = document.getElementById('averageCGPA');
const addBtn = document.querySelector('.add-btn');
const students = [];
let editingStudentId = null;

studentForm.addEventListener('submit', (event) =>{
    
    event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const age = parseInt(ageInput.value);
        const cgpa = parseFloat(cgpaInput.value);
        const department = deptInput.value;

        if(!name){
            alert('Please enter a valid name.');
            return;
        }
        if(!email){
            alert('Please enter a valid email.');
            return;
        }
        if(isNaN(age) || age <= 0){
            alert('Please enter a valid age.');
            return;
        }
        if(isNaN(cgpa) || cgpa < 0 || cgpa > 10){
            alert('Please enter a valid CGPA (0-10).');
            return;
        }
        if(!department){
            alert('Please select a department.');
            return;
        }

    if(editingStudentId === null){
        
        const newStudent = {
            id: Date.now(),
            name,
            email,
            age,
            cgpa,
            department
        };
        students.push(newStudent);
        renderStudents();
        studentForm.reset();
    }else{
        const student = students.find(s => s.id === editingStudentId);
        student.name = name;
        student.email = email;
        student.age = age;
        student.cgpa = cgpa;
        student.department = department;
        renderStudents();
        studentForm.reset();
        editingStudentId = null;
        addBtn.textContent = 'Add Student';
    }
})

studentContainer.addEventListener('click', handleStudentActions);
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(keyword) ||
        student.email.toLowerCase().includes(keyword)
    );

    renderStudents(filtered);
});

filterInput.addEventListener("change", () => {

    if(filterInput.value==="all"){

        renderStudents();

        return;

    }

    const filtered = students.filter(student =>
        student.department === filterInput.value
    );

    renderStudents(filtered);

});

sortInput.addEventListener("change", () => {

    const value = sortInput.value;

    if(value==="name"){

        students.sort((a,b)=>
            a.name.localeCompare(b.name)
        );

    }

    if(value==="cgpa"){

        students.sort((a,b)=>b.cgpa-a.cgpa);

    }

    if(value==="age"){

        students.sort((a,b)=>a.age-b.age);

    }

    renderStudents();

});

function renderStudents(){
    studentContainer.innerHTML = '';
    students.forEach((student) => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        const nameElement = document.createElement('h3');
        nameElement.textContent = student.name;
        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${student.email}`;
        const ageElement = document.createElement('p');
        ageElement.textContent = `Age: ${student.age}`;
        const cgpaElement = document.createElement('p');
        cgpaElement.textContent = `CGPA: ${student.cgpa}`;
        const deptElement = document.createElement('p');
        deptElement.textContent = `Department: ${student.department}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.studentId = student.id;
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.dataset.studentId = student.id;

        studentCard.append(
            nameElement, 
            emailElement, 
            ageElement, 
            cgpaElement, 
            deptElement,
            deleteBtn,
            editBtn
        );

        studentContainer.appendChild(studentCard);
    })
}


function handleStudentActions(event){

    if (event.target.classList.contains('delete-btn')) {
        const id = Number(event.target.dataset.studentId);
        const index = students.findIndex(student => student.id === id);
        students.splice(index, 1);
        renderStudents();
    }

    if(event.target.classList.contains('edit-btn')){
        const id = Number(event.target.dataset.studentId);
        const student = students.find(student => student.id === id);
        if(student){
            nameInput.value = student.name;
            emailInput.value = student.email;
            ageInput.value = student.age;
            cgpaInput.value = student.cgpa;
            deptInput.value = student.department;
            editingStudentId = id;
            addBtn.textContent = 'Update Student';
        }
    }
}