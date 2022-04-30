class Employee
{
    constructor(name, id, email)
    {
        if (typeof name !== "string" && typeof id !== "string" && typeof email !== "string")
        {
            throw new Error(
                "Expected parameters should not be empty"
            );
        }
        else
        {
            if (typeof name == 'string')
            {
                this.name = name;
            }
            else
            {
                throw new Error(
                    "Expected parameter 'name' to be a non empty string"
                );
            }
            if (typeof id == 'string')
            {
                this.id = id;
            }
            else
            {
                throw new Error(
                    "Expected parameter 'id' to be a non empty string"
                )
            }
            if (typeof email == "string")
            {
                this.email = email;
            }
            else
            {
                throw new Error(
                    "Expected parameter 'email' to be a non empty string"
                );
            }
        }
    }


    getName()
    {
        return this.name;
    }
    getId()
    {
        return this.id;
    }
    getEmail()
    {
        return this.email;
    }
    getRole()
    {
        return `Employee`;
    }

}

module.exports = Employee;