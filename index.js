//import needed packages
const inquire = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utility/writehtml');
const Engineer = require('./library/engineer');

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
        name: 'ID',
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

function init() {
    //using inquirer, 
    //have our questioins go through node to collect our data
    inquire
        .prompt(questions)
        //then send answers into the array to build with
        .then((data) => {
            let newEmployee
            if (data.type === "Manager"){
                newEmployee = new Manager(name, id, email, officeNumber)
            } else if (data.type === "Engineer"){
                newEmployee = new Engineer(name, id, email, github)
            } else if (data.type === "Intern")
                newEmployee = new Intern(name, id, email, school)
        })

        //repeat until done is selected

        //then take the data and pass through write to file
        .then((teamMembers) => {
            let htmlContent = generateHTML(teamMembers);
            const filename = 'README.md';
            writeToFile(filename, htmlContent);
        })
}


// run function to get it started
init()