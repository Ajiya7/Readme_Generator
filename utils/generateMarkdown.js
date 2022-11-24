// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ![License](https://img.shields.io/badge/license-${data.license}-blue "License Badge")

  ## Table of Contents
  - [Description](#description)
  - [Installastion](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation_instructions}

  ## Usage
  ${data.Usage_info}

  ## License
  Notice: For more information about the license, click on the link below.
  ![License link](https://choosealicense.com/licenses/${data.license}/)

  ## Contribution
  ${data.Contribution}

  ## Test
  ${data.Test_instructions}

  ## Questions
  For questions about this project you can go to my GitHub page at the following link:
  - [GitHub Profile](https://github.com/${data.Username})

  For additional questions please reach out to me: ${data.Email}.
`;
}

module.exports = generateMarkdown;
