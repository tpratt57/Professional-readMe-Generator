// TODO: Create a function that returns a license badge based on which license is passed in
function badge(license){
  return `[Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributors](#contributors)
  [Tests](#tests)
  [Questions](#questions)

  ## Instalation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is covered under the ${data.license} license.
  ${badge(data.license)}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  **GitHub Username:** ${data.username}
  **GitHub Profile:** www.github.com/${data.username}/
  **Email Address:** ${data.email}

`;
}

module.exports = generateMarkdown;