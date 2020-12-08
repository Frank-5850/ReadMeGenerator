// declared Variables and dependancies
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./util/generateReadMe');
const util = require ('util');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user to build readme
const questions = () =>
inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of your project? "
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions? ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project going to be used for?"
        },
        {
            type: "list",
            name: "license",
            message: "What license does this project have? ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Are there a any test, if so what are the instructions?"
        },
        {
            type: "input",
            name: "questions",
            message: "What if the user has any questions? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);

questions()
    .then((userData) => writeFileAsync('README.md', generate(userData)))
    .then(()=> console.log('success!'))
    .catch((err) => console.log(err))
