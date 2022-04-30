const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern")
const inquirer = require("inquirer")
const fs = require("fs");
const generateHTML = require("./generateHTML");


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

const menu = [{
    type: "list",
    message: "Who else would you like to add to your team? ",
    choices: ["Engineer", "Intern", "Done"],
    name: "menu",
}];

const team = [];
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