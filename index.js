//Code to Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Questions to be prompted to the user
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message:
        "Provide a short description explaining the what, why, and how of your project.",
    },
    {
      type: "input",
      name: "tableofcontents",
      message:
        "If your README is long, add a table of contents to make it easy for users to find what they need.",
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },

    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Provide guidlines for contribution.",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide test instructions for your project.",
    },
    {
      type: "list",
      message: "Chose a license for your project.",
      name: "license",
      choices: ["MIT", "GNU", "ISC", "None"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username to link your Github profile.",
    },
    {
      type: "input",
      name: "email",
      message:
        "Enter your email address to users can contact you with additional questions.",
    },
  ])
  //Using the user input data to generate the README file
  .then((data) => generateREADME(data))
  .catch((error) => console.error(error));

// Function to generate README content based on user input
function generateREADME(data) {
  const badge = generateLicenseBadge(data.license);

  //Format of the README file
  const readmeContent = `
# ${data.title}

${badge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For more information, you can visit my GitHub profile: [${data.github}](https://github.com/${data.github})

If you have additional questions, you can reach me at ${data.email}.
`;

  //Fuction to generate README file
  fs.writeFile("README.md", readmeContent, (error) => {
    if (error) {
      console.error("Error generating README:", error);
    } else {
      console.log("README.md successfully generated!");
    }
  });
}

// function to generate license badge based on user's choice
function generateLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(
    license
  )}-blue.svg)`;
}
