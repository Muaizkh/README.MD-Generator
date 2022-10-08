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
    else if(license === 'Apache 2.0') {
      license

    }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
  `# ${data.title}
${getLicen}

## Description
${data.description}

## Table of Contents
- [Description]
- [Installation]
`;
}

module.exports = generateMarkdown;
