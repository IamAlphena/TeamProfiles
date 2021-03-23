//import needed packages
const inquire = require('inquirer')

//array for question to determin what happens next
const questions = [
    {
        type: 'list',
        name: 'employment',
        message: 'Would like to add another member to the team?',
        choices: ['Manager', 'Engineer', 'Intern', 'Done']
    },
]

// questions if it is a manager
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is this employees name?',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is this employees ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this employees email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is this managers office number?',
    },
]

//questions if engineer
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is this employees name?',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is this employees ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this employees email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is this engineers github name?',
    },
]

//questions if intern
const internQuestions = [
    
    {
        type: 'input',
        name: 'name',
        message: 'What is this employees name?',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is this employees ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this employees email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is this interns school?',
    },
]

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
        //logic based if it is manager, engineer, intern

        //send data if manager, engineer, intern to correct file

        //repeat until done is selected

        //then take the data and pass through write to file
        .then((data) => {
            let htmlContent = generateHtml(data);
            const filename = 'README.md';
            writeToFile(filename, markdownPageContent);
        })
}


// run function to get it started
init()