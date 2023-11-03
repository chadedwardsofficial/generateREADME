const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')



const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Provide installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide usage information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Provide contribution guidelines:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Provide test instructions:',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Choose a license for your application:',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

inquirer.prompt(questions)
  .then(answers => {
    const badge = generateMarkdown.renderLicenseBadge(answers.license);
    const readmeContent = generateREADME(answers, badge);
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md generated successfully!');
      }
    });
  })
  .catch(error => {
    console.error(error);
  });