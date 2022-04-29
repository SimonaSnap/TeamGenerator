const Intern = require("../classes/intern");

describe("Intern", () =>
{
    describe("Initialization", () =>
    {
        it("should create an object with a name, id, email, school name and role with valid parameters", () =>
        {
            const intern = new Intern("Mark", 1, "mark@gmail.com", "UW");

            expect(intern.name).toEqual("Mark");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("mark@gmail.com");
            expect(intern.school).toEqual("UW");
        });

        it("get Role method should equal 'Intern'", () =>
        {
            const intern = new Intern("Mark", 1, "mark@gmail.com", "UW");
            const role = "Intern";

            expect(intern.getRole()).toEqual(role)
        })
    })
})