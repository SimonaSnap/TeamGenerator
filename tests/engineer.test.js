const Engineer = require("../classes/engineer");

describe("Engineer", () =>
{
    describe("Initialization", () =>
    {
        it("should create an object with a name, id, email, github username and role with valid parameters", () =>
        {
            const engineer = new Engineer("Mark", "1", "mark@gmail.com", "MarkMark");

            expect(engineer.name).toEqual("Mark");
            expect(engineer.id).toEqual("1");
            expect(engineer.email).toEqual("mark@gmail.com");
            expect(engineer.gitHub).toEqual("MarkMark");
        });

        it("get Role method should equal 'Engineer'", () =>
        {
            const engineer = new Engineer("Mark", "1", "mark@gmail.com", "MarkMark");
            const role = "Engineer";

            expect(engineer.getRole()).toEqual(role)
        })
    })
    describe("Parameter check", () =>
    {
        it("should throw an error if no parameters are given", () =>
        {
            const cb = () => new Engineer();
            const err = new Error(
                "Expected parameters should not be empty"
            );

            expect(cb).toThrowError(err);
        })
    })
})