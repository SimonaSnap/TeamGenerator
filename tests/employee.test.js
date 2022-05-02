const Employee = require("../classes/employee");

//describe what i am testing
//i follow the same format for all the subclasses as well
describe("Employee", () =>
{
    //describe what part of the employee i am testing
    describe("Initialization", () =>
    {
        //testing what part of initilization = checking to see what a successful instance shall produce
        it("should create an object with a name, id, email, and role with valid parameters", () =>
        {
            const employee = new Employee("Mark", "1", "mark@gmail.com");

            expect(employee.name).toEqual("Mark");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("mark@gmail.com");
        });

        //testing to make sure that the function specific to this class also works
        it("get Role method should equal 'Employee'", () =>
        {
            const employee = new Employee("Mark", "1", "mark@gmail.com");
            const role = "Employee";

            expect(employee.getRole()).toEqual(role)
        })
    })

    //a series of tests making sure that if given either no parameters, or a wrong value an error shall be given
    //in addition the errors are the correct errors
    describe("Employee parameter check", () =>
    {

        it("should throw an error if no parameters are given", () =>
        {
            const cb = () => new Employee();
            const err = new Error(
                "Expected parameters should not be empty"
            );

            expect(cb).toThrowError(err);

        })

        it("should throw an error if name is not a non empty string", () =>
        {
            const cb = () => new Employee(0, "1", "mark@gmail.com");
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        })

        it("should throw an error if id is not a non empty string", () =>
        {
            const cb = () => new Employee("Mark", 0, "mark@gmail.com");
            const err = new Error(
                "Expected parameter 'id' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        })

        it("should throw an error if email is not a non empty string", () =>
        {
            const cb = () => new Employee("Mark", "1", 0);
            const err = new Error(
                "Expected parameter 'email' to be a non empty string"
            );

            expect(cb).toThrowError(err);
        })

    })
})
