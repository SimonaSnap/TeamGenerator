const Employee = require("./employee");
//the class takes the employee class

class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        //the different if and else statements are checking to make sure that the inputs taken are non empty strings
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

    //i use this function to check the instances being created in the index.js file/called in the forEach
    //function to check which render should be called
    getRole()
    {
        return "Intern";
    }


    //this sets up how i want the card of information to look like and were to insert the instance specific information
    //this is then inserted in the generateHTML function to set up the written html file
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
                        <a href="#" class="card-link">${this.getSchool()}</a>
                    </div>
                </div>
            </div>`
    }
}

module.exports = Intern;