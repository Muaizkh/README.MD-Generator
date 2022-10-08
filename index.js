// TODO: Include packages needed for this application
const inquirer = require("inquirer");
 const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "provide a short description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Table of Contents.",
        name: "TOB",
    },
    {
        type: "input",
        message: "What are the steps to install the project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use this project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Who worked on this project?",
        name: "credits",
    },
    {
        type: "input",
        message: "How do you test this project?",
        name: "test",
    },
    {
        type: "input",
        message: "What license does your project utilize?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "Boost Software", "None"]
    },
    {
        type: "input",
        message: "What is your email?",
        name: "contacts",
    },  
    {
        type: "input",
        message: "What is your github?",
        name: "contact",
    },  
];

// TODO: Create a function to write README file
// this function creats a fs file that will store all the information taken from prompts in previous section
function writeToFile(data) {
    fs.writeFile('README.md', data , (err) => {
        if (err) {
            return console.log ("error");
    
        }
        console.log ("Successfully created README!");
        });
};
// TODO: Create a function to initialize app
// this allows the prompts to begin when trying to create the readme and then writes them into a file
function init() {
    inquirer
    .prompt (questions)
    .then (function (writeFile) {
        console.log(writeFile)
        writeToFile('README.md', generateMarkdown('data'));
    })
    };
// Function call to initialize app
init();
