// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![License] (https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  else if (license === 'Apache 2.0') {
    badge = '![License] (https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
else if (license === 'Boost Software') {
  badege = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
}
return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT'){
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  }
  else if (license === 'Apache 2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  else if (license === 'Boost Software') {
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt'
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let LicenseSection = '';
  if (license === 'None') {
    LicenseSection = 'None';}
    else if(license === 'MIT') {
      LicenseSection = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
    }
    else if(license === 'Apache 2.0') {
      LicenseSection = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
    }
    else if(license === 'Boost Software') {
      LicenseSection = 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
    }
    return LicenseSection;
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
  `# ${data.title}


## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Test](#test)
- [License](#license)
- [Contact](#contact)

## Installation 
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Test
${data.test}

## License
${data.license}

## Contact
${data.contact}

`;
}

module.exports = generateMarkdown;
