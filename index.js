//requiring all of the subclasses, inquirer, and the generate function so that I can reference them here
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern")
const inquirer = require("inquirer")
const fs = require("fs");
const generateHTML = require("./generateHTML");

//a series of input set ups for each type of employee to then ask in the inquirer prompts
//manager set up
const questionsManager = [
    "What is the manager's name? ",
    "What is the manager's employee id? ",
    "What is the manager's email address? ",
    "What is the manager's office number? "
];
const namesManager = [
    "manName",
    "manId",
    "manEmail",
    "officeNum"
];

//engineer set up
const questionsEngineer = [
    "What is the engineer's name? ",
    "What is the engineer's employee id? ",
    "What is the engineer's email address? ",
    "What is the engineer's GitHub username? "
];

const namesEngineer = [
    "engName",
    "engId",
    "engEmail",
    "gitHub"
];

//intern set up
const questionsIntern = [
    "What is the intern's name? ",
    "What is the intern's employee id? ",
    "What is the intern's email address? ",
    "What school is the intern attending? "
];
const namesIntern = [
    "intName",
    "intId",
    "intEmail",
    "school"
];

//creating for loops that takes the array values and creates the seperate prompt set ups to then use
const managerQArr = [];
for (let i = 0; i < questionsManager.length; i++)
{
    managerQArr.push(
        {
            type: "input",
            message: questionsManager[i],
            name: namesManager[i],
        }
    )
}

const engineerQArr = [];
for (let i = 0; i < questionsEngineer.length; i++)
{
    engineerQArr.push(
        {
            type: "input",
            message: questionsEngineer[i],
            name: namesEngineer[i],
        }
    )
}

const internQArr = [];
for (let i = 0; i < questionsIntern.length; i++)
{
    internQArr.push(
        {
            type: "input",
            message: questionsIntern[i],
            name: namesIntern[i],
        }
    )
}

//this creates the menu to ask to add more employees or not
const menu = [{
    type: "list",
    message: "Who else would you like to add to your team? ",
    choices: ["Engineer", "Intern", "Done"],
    name: "menu",
}];

//the team array adds each employee we create when running the program, to then write the html file with everyone's information
const team = [];

//the start function starts the program by asking the manager questions because we only have one manager, then calls init to call the menu and create the rest of the team
function start()
{
    inquirer
        .prompt([...managerQArr])
        .then((results) =>
        {
            var manager = new Manager(results.manName, results.manId, results.manEmail, results.officeNum);
            team.push(manager);

            init();
        })
}

//the function that contains the rest of the team and menu
//this function also has the write file code - which will actually generate the html using the generateHtml function on the generateHTML.js file
function init()
{
    inquirer
        .prompt(...menu)
        .then((response) =>
        {
            if (response.menu === "Engineer")
            {
                inquirer.prompt(engineerQArr)
                    .then((input) =>
                    {
                        var engineer = new Engineer(input.engName, input.engId, input.engEmail, input.gitHub);
                        team.push(engineer);
                        init();
                    });
            }
            else if (response.menu === "Intern")
            {
                inquirer.prompt(internQArr)
                    .then((input) =>
                    {
                        var intern = new Intern(input.intName, input.intId, input.intEmail, input.school);
                        team.push(intern);
                        init();
                    })
            }
            else if (response.menu === "Done")
            {
                //console.log(team);
                fs.writeFile("index.html", generateHTML(team), function (err)
                {
                    err ? console.error(err) : console.log("Success");
                })
            }
        })
}

start();