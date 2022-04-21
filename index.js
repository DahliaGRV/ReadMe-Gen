// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const fs= require('fs');
const generateMarkdown= require('./generateMarkdown')

inquirer.prompt([{
    type: "input",
    name:"title",
    message:"What is the name of your project?"
},{
    type:"input",
    name:"description",
    message:"Please include a description of your project:"
},{
    type:"input",
    name:"usage",
    message:"Please explain how this project will be/is used:"
},{
    type:"input",
    name:"installation",
    message:"Please describe steps that need to be taken for this program to work:"
},{
    type:"input",
    name:"credit",
    message:"Include any sources you would like to credit:"
},{ 
    type:"input",
    name:"email",
    message:"Email Address:"
},{ 
    type:"input",
    name:"profile",
    message:"GitHub profile URL:"
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
    message:"Licesnse you would like to include:",
    choices:["GPLv2","GPLv3","LGPLv3","None"]

},{
    type:"input",
    name:"summary",
    message:"What were some ways this project challenged you? What did you learn?"
},{
    type:"input",
    name:"tests",
    message:"What tests were run on this project?"
}
])
    .then((data)=> {
        console.log(data);
        fs.writeFile(`./${data.title}.README.md`, generateMarkdown(data),function(err){
            if(err){throw err}
        })
    })
