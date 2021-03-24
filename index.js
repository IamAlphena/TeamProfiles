//import needed packages
const inquire = require('inquirer');
const fs = require('fs');

const Employee = require('./library/employee');
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

//array for questions, that include when conditionals to determin which question to ask next
const questions = [
    {
        type: 'list',
        name: 'type',
        message: 'Would like to add another member to the team?',
        choices: ['Manager', 'Engineer', 'Intern', 'Done']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is this employees name?',
        when: (answers) => {
            if (answers.type !== "Done") {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is this employees ID number?',
        when: (answers) => {
            if (answers.type !== "Done") {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this employees email?',
        when: (answers) => {
            if (answers.type !== "Done") {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is this managers office number?',
        when: (answers) => {
            if (answers.type === "Manager") {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is this engineers github name?',
        when: (answers) => {
            if (answers.type === "Engineer") {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is this interns school?',
        when: (answers) => {
            if (answers.type === "Intern") {
                return true;
            }
        }
    },
]

//array to populate created employees
const teamMembers = [];

// function writes the HTML to file and logs errors or that the page was written
function writeToFile(filetype, data) {
    fs.writeFile(filetype, data, (err) =>
        err ? console.log(err) : console.log('Created your Team Page!')
    )
}

function addEmployee(){
    //using inquirer, 
    //have our questioins go through node to collect our data
    inquire
        .prompt(questions)
        //then send answers into the array to build with
        .then((answers) => {
            // console.log(answers)
            let newEmployee;
            //check for type of employee to save the correct class
            if (answers.type === "Manager"){
                newEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            } else if (answers.type === "Engineer"){
                newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github)
            } else if (answers.type === "Intern")
                newEmployee = new Intern(answers.name, answers.id, answers.email, answers.school)
            //push to the team array 
            teamMembers.push(newEmployee)      
            // console.log(teamMembers)
       
             //repeat until done is selected
            if (answers.type !== "Done") {
                addEmployee();
            } else {
                generateHTML(teamMembers);
            }
        })    
}

//variable to compile HTML
const fullHtml = [];

//variable with our starter HTML
const topHtml = 
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <style>
        body {
            background-color: #4b5253;
        }
    </style>
    <title>My Team</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4" style="text-align: center;">My Team</h1>
        </div>
    </div>
    <div class="container" id="cardSpace" style= "display: flex; flex-wrap: wrap;">
   `

// const managerCard = `<div class="card" style="width: 18rem; margin: 15px;">
// <div class="card-body" style="background-color: teal; color: whitesmoke;">
//     <h5 class="card-title">${teamMembers[i].name}</h5>
//     <p class="card-text"> Manager</p>
// </div>
// <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${teamMembers.id} </li>
//         <li class="list-group-item">Email: ${teamMembers.email} </li>
//         <li class="list-group-item">Office Number ${teamMembers.officeNumber}</li>
//     </ul>
// </div>
// </div>`

// const engineerCard = 
//  `<div class="card" style="width: 18rem; margin: 15px;">
// <div class="card-body" style="background-color: teal; color: whitesmoke;">
//     <h5 class="card-title">${teamMembers[i].name}</h5>
//     <p class="card-text"> Engineer</p>
// </div>
// <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${teamMembers.id} </li>
//         <li class="list-group-item">Email: ${teamMembers.email} </li>
//         <li class="list-group-item">Github ${teamMembers.github}</li>
//     </ul>
// </div>
// </div>`

// const internCard = `<div class="card" style="width: 18rem; margin: 15px;">
// <div class="card-body" style="background-color: teal; color: whitesmoke;">
//     <h5 class="card-title">${teamMembers[i].name}</h5>
//     <p class="card-text"> Intern</p>
// </div>
// <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${teamMembers.id} </li>
//         <li class="list-group-item">School ${teamMembers.school}</li>
//     </ul>
// </div>
// </div>`

const endHtml = 
`</div>
</body>
</html>`




//function to compile our HTML
function generateHTML(data){
    console.log(data);
    fullHtml.push(topHtml);
//    for (let i = 0; i > teamMembers.length; i++) {
//        if (teamMembers[i] )
//    }

}



//function that calls the html page from our write html utility
// function buildHtml(teamMembers) {
//     let htmlContent = generateHTML(teamMembers);
//     const filename = 'team.html';
//     writeToFile(filename, htmlContent);
// }







function init(){
    addEmployee();
  
}

// run function to get it started
init()