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
}

module.exports = Manager;