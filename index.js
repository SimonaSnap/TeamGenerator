const Employee = require("./classes/employee");
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