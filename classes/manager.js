const Employee = require("./employee");

class Manager extends Employee
{
    constructor(name, id, email, officeNum)
    {
        super(name, id, email)
        if (typeof name !== "string" && typeof id !== "string" && typeof email !== "string" && typeof officeNum !== "string")
        {
        }
        else
        {
            if (typeof name == "string" && typeof id == "string" && typeof email == "string" && typeof officeNum == 'string')
            {
                this.officeNum = officeNum;
            }
            else
            {
                throw new Error(
                    "Expected parameter 'officeNum' to be a non empty string"
                );
            }
        }
    }

    getOfficeNum()
    {
        return this.officeNum;
    }

    getRole()
    {
        return "Manager";
    }

    getRender()
    {
        return `<div class="col-sm-3">
        <div class="card p-3">
            <div class="card-body">
                <h4 class="card-title">${this.getName()}</h4>
                <img class="p-1" src="./Assets/intern.png">
                <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
                <a href="#" class="card-link">${this.getId()}</a>
                <a href=mailto:"${this.getEmail()}" target="_blank" class="card-link">${this.getEmail()}</a>
                <a href="#" class="card-link">${this.getOfficeNum()}</a>
            </div>
        </div>
    </div>`
    }
}

module.exports = Manager;