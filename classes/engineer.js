const Employee = require("./employee");
//the class takes the employee class
class Engineer extends Employee
{
    constructor(name, id, email, gitHub)
    {
        //super is where i am stating that the name, id, and email parameters wil be handled by the employee class
        super(name, id, email)

        //the different if and else statements are checking to make sure that the inputs taken are non empty strings
        if (typeof name !== "string" && typeof id !== "string" && typeof email !== "string" && typeof gitHub !== "string")
        {
        }
        else
        {
            if (typeof name == "string" && typeof id == "string" && typeof email == "string" && typeof gitHub == 'string')
            {
                this.gitHub = gitHub;
            }
            else
            {
                throw new Error(
                    "Expected parameter 'gitHub' to be a non empty string"
                );
            }
        }
    }

    getGitHub()
    {
        return this.gitHub;
    }

    //i use this function to check the instances being created in the index.js file/called in the forEach
    //function to check which render should be called
    getRole()
    {
        return "Engineer";
    }

    //this sets up how i want the card of information to look like and were to insert the instance specific information
    //this is then inserted in the generateHTML function to set up the written html file
    getRender()
    {
        return `<div class="col-sm-3">
        <div class="card p-3">
            <div class="card-body">
                <h4 class="card-title">${this.getName()}</h4>
                <img class="p-1" src="./Assets/engineer.png">
                <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                <a href="#" class="card-link">${this.getId()}</a>
                <a href=mailto:"${this.getEmail()}" target="_blank" class="card-link">${this.getEmail()}</a>
                <a href="https://github.com/${this.getGitHub()}" target="_blank" class="card-link">${this.getGitHub()}</a>
            </div>
        </div>
    </div>`
    }
}

module.exports = Engineer;