// DOM elements

const subcriberDetails = document.getElementById('subcriberDetails'); // takes element of form
const studentsContainer = document.querySelector('.students'); // gets students div
const nameInput = subcriberDetails['name']; // how you catch the child elements of parent
const emailInput = subcriberDetails['email'];

const students= JSON.parse(localStorage.getItem("students")) || [] // array in which you push the data ie fed



const addSub = (name, age, roll) => {
    students.push({
        name,
        email,
    });

    localStorage.setItem("students", JSON.stringify(students)); //object key and string value

    return { name, age, roll };
};

const createSub = ({ name, age, roll }) => { //destructuring name, age, roll from object
    //creates elements
    const studentDiv = document.createElement("div");
    const subName = document.createElement("h2");
    const subEmail = document.createElement("p");
    const studentRoll = document.createElement("p");

    //adds inner text
    subName.innerText = "name: " + name;
    subEmail.innerText = "email: " + email;

    //appends it
    studentDiv.append(subName, subEmail)
    studentsContainer.appendChild(studentDiv);


}

students.forEach(createSub)

subcriberDetails.onsubmit = e => {
    e.preventDefault();
    const newStudent = addSub(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );

    createSub(newStudent);

    nameInput.value="";
    ageInput.value="";
    rollInput.value=""
};