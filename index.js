// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [];

inquirer.prompt([
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    name: "tableOfContents",
    message:
      "If your README is long, add a table of contents to make it easy for users to find what they need.",
  },
  {
    type: "input",
    name: "Installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },

  {
    type: "input",
    name: "Usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "list",
    message: "Chose a license for your project.",
    name: "contact",
    choices: ["MIT", "GNU", "None"],
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "Questions",
    message: "Enter your GitHub username to link your Github profile.",
  },
  {
    type: "input",
    name: "Questions",
    message:
      "Enter your email address to users can contact you with additional questions.",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
