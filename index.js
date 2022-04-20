// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const fs= require('fs');



// TODO: Create an array of questions for user input
inquirer.prompt([{
    type: "input",
    name:"title",
    message:"What is the name of your project?"
},{
    type:"input",
    name:"description",
    message:"Please include a description of your project:"
},{
    type:"checkbox",
    name:"languages",
    message:"What languages were used? Select all that apply:",
    choices:["HTML","JavaScript","C++","Python"]
},{
    type:"input",
    name:"usage",
    message:"Please explain how this project will be/is used:"
},{
    type:"input",
    name:"credit",
    message:"Include any sources you would like to credit:"
},{ 
    type:"input",
    name:"repoLink",
    message:"GitHub Repo link:"
},{
    type:"input",
    name:"deployedLink",
    message:"Deployed link:"
},{
    type:"list",
    name:"license",
    message:"Licesne you would like to include:"

}
])
    .then((answers)=> {
        console.log(answers);
        fs.writeFile(`./README.md`,)
    })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();