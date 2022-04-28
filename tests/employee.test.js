const Employee = require("../classes/employee");

describe("Employee", () =>
{
    describe("Initialization", () =>
    {
        it("should create an object with a name, id, email, and role with valid parameters", () =>
        {
            const employee = new Employee("Mark", 01, "mark@gmail.com");

            expect(employee.name).toEqual("Mark");
            expect(employee.id).toEqual(01);
            expect(employee.email).toEqual("mark@gmail.com");
        });

        it("should throw an error if provided no arguments", () =>
        {
            const cb = () => new Employee();

            expect(cb).toThrow();
        })
    })
})