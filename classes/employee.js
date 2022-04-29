class Employee
{
    constructor(name, id, email)
    {
        if (typeof name !== "string" && typeof id !== "number" && typeof email !== "string")
        {
            throw new Error(
                "Expected parameter 'name, id, and email' should not be empty"
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
            if (typeof id == 'number')
            {
                this.id = id;
            }
            else
            {
                throw new Error(
                    "Expected parameter 'id' to be a non empty number"
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