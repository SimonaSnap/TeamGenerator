const Employee = require("./employee");

class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        super(name, id, email)
        if (typeof name !== "string" && typeof id !== "number" && typeof email !== "string" && typeof school !== "string")
        {
        }
        else
        {
            if (typeof name == "string" && typeof id == "number" && typeof email == "string" && typeof school == 'string')
            {
                this.school = school;
            }
            else
            {
                throw new Error(
                    "Expected parameter 'school' to be a non empty string"
                );
            }
        }
    }

    getSchool()
    {
        return this.school;
    }

    getRole()
    {
        return "Intern";
    }
}

module.exports = Intern;