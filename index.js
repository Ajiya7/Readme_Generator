// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your Repository?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please enter a description for your repository',
        },
        {
            type: 'input',
            name: 'Installation_instructions',
            message: 'Please enter the istallation instructions',
        },
        {
            type: 'input',
            name: 'Usage_info',
            message: 'Provide some examples on how this project should be used',
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'How do you want others to contribute to this project?',
        },
        {
            type: 'input',
            name: 'Test_instructions',
            message: 'What are the test instructions?',
        },
        {
            type: "checkbox",
            message: "Please select a license",
            choices: ["Apache license 2.0", "MIT", "ISC", "GNU GPLv3"],
            name: "license",
        },
        {
            type: 'input',
            name: 'Username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is your email address?',
        },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
