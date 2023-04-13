// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'Mozilla') {
    return `https://www.mozilla.org/en-US/MPL/2.0/`
  }
  if (license === 'Apache') {
    return `https://www.apache.org/licenses/` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![Github licence](http://img.shields.io/badge/license-${data.licenses}-blue.svg)

  ## Description 
      ${data.description}

  ## Table of Content
    - [Installation](#installation)
    - [Description](#description)
    - [Contribution](#contribution)
    - [Usage](#usage)
    - [License](#licenses)
    - [Tests](#tests)
    - [Questions](#questions)

  ## Installation 
      ${data.installation}
  
  ## Usage 
      ![project screenshot](${data.screenshotPath}) 
         
  ## Contribution 
      ${data.contribution}

  ## Tests
      ${data.tests}

  ## License 
  This application is covered under the ${renderLicenseLink(data.licenses)}license.

  ## Questions
      Have questions about this project?  
      Email: ${data.email}
      GitHub: https://github.com/${data.github}  
`;
}

module.exports = generateMarkdown;
