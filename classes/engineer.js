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
}

module.exports = Engineer;