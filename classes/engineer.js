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
        return `<div class="col-sm-4">
                <div class="card p-3">
                    <div class="card-body">
                        <h5 class="card-title">${this.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                        <a href="#" class="card-link">${this.getId()}</a>
                        <a href="#" class="card-link">${this.getEmail()}</a>
                        <a href="#" class="card-link">${this.getGitHub()}</a>
                    </div>
                </div>
            </div>`
    }
}

module.exports = Engineer;