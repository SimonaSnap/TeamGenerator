const Employee = require("./employee");

class Engineer extends Employee
{
    constructor(name, id, email, gitHub)
    {
        super(name, id, email)

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

    getRole()
    {
        return "Engineer";
    }

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