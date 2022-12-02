// packages needed for this application are linked here
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = () => {
     inquirer.prompt([
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
            choices: ["apache-2.0", "mit", "isc", "gpl-3.0"],
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
])
.then(answers => {
    writeToFile(answers)
});
};

// function to write the readme file
function writeToFile(data) {
    fs.writeFile('README.md',  generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Readme completed'))
}

// initializing the application
function init() {
    questions()
}
// Function call to initialize app
init();
