// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'README.md';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the appropriate instillation process, if required:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended usage of this project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'select the appropriate license for this project',
        choices: ["Mozilla", "MIT", "SIL", "Perl", "Zlib", "The Unlicense"]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributor/s to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Are there any tests included in this project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:'
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //generate markdown from user input
    const markdown = generateMarkdown(data);
    //write markdown
    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw (err);
        console.log("Success!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile(fileName, data)
        })
}

// Function call to initialize app
init();
