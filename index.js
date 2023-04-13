// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatorMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input

const questions = ([
  {
    type: "input",
    name: "name",
    message: "Welcome to the README Generator. Please enter your name",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username",
  },
  {
    type: "input",
    name: "title",
    message: "Please enter your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Write your project description here:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the process for installation?",
  },
  {
    type: "input",
    name: "contribution",
    message: "How others contribute to this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Instructions for usage:",
  },
  {
    type: 'input',
    message: "If you've got a screenshot, provide the path to that here.",
    name: 'screenshotPath',
},
  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license?",
  },
  {
    type: "list",
    name: "licenses",
    message: "Choose the license for your project?",
    choices: ["Mozilla", "MIT", "Apache"],
  },
  {
    type: "input",
    name: "tests",
    message: "Test cases",
  },

]);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
          const generateReadme = generatorMarkdown(data);
            fs.writeFile("readmeGuide.md", generateReadme, (error) =>{
                error? console.error(error): console.log("Your README is successfully created");
            } )
    })
}

// Function call to initialize app
init();
