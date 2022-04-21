function renderLicenseBadge(license) {
    if (license==="GPLv2"){
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (license === "GPLv3"){
        return"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (license === "LGPLv3"){
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    } else {
        return ""
    }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
var markdown = `# ${data.title}${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Summary](#summary)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing 
${data.credit}

## Tests
${data.tests}

## License

This README is covered under license ${data.license}

## Questions
* For any questions please contact me at this email address:${data.email}

* [GitHub Portfolio](${data.profile})

* [Repository Link](${data.repoLink})
* [Deployed Link](${data.deployedLink})

## Summary
${data.summary} 
  `;
  return markdown
}

module.exports = generateMarkdown;