const Employee = require("./employee");

class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        super(name, id, email)
        if (typeof name !== "string" && typeof id !== "string" && typeof email !== "string" && typeof school !== "string")
        {
        }
        else
        {
            if (typeof name == "string" && typeof id == "string" && typeof email == "string" && typeof school == 'string')
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

    getRender()
    {
        return `<div class="col-sm-4">
                <div class="card p-3">
                    <div class="card-body">
                        <h5 class="card-title">${this.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                        <a href="#" class="card-link">${this.getId()}</a>
                        <a href="#" class="card-link">${this.getEmail()}</a>
                        <a href="#" class="card-link">${this.getSchool()}</a>
                    </div>
                </div>
            </div>`
    }
}

module.exports = Intern;