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

function addEmployee() {
    //using inquirer, 
    //have our questioins go through node to collect our data
    inquire
        .prompt(questions)
        //then send answers into the array to build with
        .then((answers) => {
            // console.log(answers)
            let newEmployee;
            //check for type of employee to save the correct class
            if (answers.type === "Manager") {
                newEmployee = new Manager(answers.name, answers.id, answers.email, answers.type, answers.officeNumber)
            } else if (answers.type === "Engineer") {
                newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.type, answers.github)
            } else if (answers.type === "Intern")
                newEmployee = new Intern(answers.name, answers.id, answers.email, answers.type, answers.school)
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

const endHtml =
    `</div>
</body>
</html>`

//function to compile our HTML
function generateHTML(data) {
    //deletes the undefined that was generated by selecting done
    data.pop()
    //adds the top of the HTML to our array
    fullHtml.push(topHtml);
    //for loop to analyze the 
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === 'Manager') {
            const managerCard = `<div class="card" style="width: 18rem; margin: 15px;">
        <div class="card-body" style="background-color: teal; color: whitesmoke;">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text"> Manager</p>
        </div>
        <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id} </li>
                <li class="list-group-item">Email: ${data[i].email} </li>
                <li class="list-group-item">Office Number ${data[i].officeNumber}</li>
            </ul>
        </div>
        </div>`
            fullHtml.push(managerCard)
        } else if (data[i].type === 'Engineer') {
            const engineerCard =
                `<div class="card" style="width: 18rem; margin: 15px;">
                    <div class="card-body" style="background-color: teal; color: whitesmoke;">
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text"> Engineer</p>
                    </div>
                    <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data[i].id} </li>
                            <li class="list-group-item">Email: ${data[i].email} </li>
                            <li class="list-group-item">Github ${data[i].github}</li>
                        </ul>
                    </div>
                </div>`
            fullHtml.push(engineerCard)
        } else if (data[i].type === "Intern") {
            const internCard =
                `<div class="card" style="width: 18rem; margin: 15px;">
                <div class="card-body" style="background-color: teal; color: whitesmoke;">
                    <h5 class="card-title">${data[i].name}</h5>
                    <p class="card-text"> Intern</p>
                </div>
                <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data[i].id} </li>
                        <li class="list-group-item">Email: ${data[i].email} </li>
                        <li class="list-group-item">School ${data[i].school}</li>
                    </ul>
                </div>
            </div>`
            fullHtml.push(internCard)
        }
    }
    fullHtml.push(endHtml);

    const filename = 'team.html';
    writeToFile(filename, fullHtml.join());
}
 
function init() {
    addEmployee();
}

// run function to get it started
init()