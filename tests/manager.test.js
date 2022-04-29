const Manager = require("../classes/manager");

describe("Manager", () =>
{
    describe("Initialization", () =>
    {
        it("should create an object with a name, id, email, office number and role with valid parameters", () =>
        {
            const manager = new Manager("Mark", 1, "mark@gmail.com", "Office Number: 01");

            expect(manager.name).toEqual("Mark");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("mark@gmail.com");
            expect(manager.officeNum).toEqual("Office Number: 01");
        });

        it("get Role method should equal 'Manager'", () =>
        {
            const manager = new Manager("Mark", 1, "mark@gmail.com", "Office Number: 01");
            const role = "Manager";

            expect(manager.getRole()).toEqual(role)
        })
    })
})