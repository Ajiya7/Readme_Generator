// Markdown to generate the Readme File
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

  ## Demo
  ![Video demo](./video/Readme_generator_project_demo.mp4)
`;
}

module.exports = generateMarkdown;
