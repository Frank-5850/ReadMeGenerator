// function to generate markdown for README
function generateReadMe(userData) {
    return `
    <h1 align="center">${userData.title} 👋</h1>
    ## Description
    ${userData.description}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Installation
    ${userData.installation}
    ## Usage
    ${userData.usage}
    ## License
    This application is distributed under the ${userData.license} license. See LICENSE for more information.
    ![badge](https://img.shields.io/badge/license-${userData.license}-blue)
    ## Contributing
    ${userData.contributing}
    ## Tests
    ${userData.tests}
    ## Questions
    ${userData.questions}
    Check out my GitHub: [${userData.username}](https://github.com/${userData.username}) if you have any questions
    or please email me at ${userData.email}
    This README was generated by [README-generator](https://github.com/Frank-5850/ReadMeGenerator)`;
    }
      
  module.exports = generateReadMe;