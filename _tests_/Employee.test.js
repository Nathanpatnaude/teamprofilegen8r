const Employee = require("../lib/Employee.js");

describe ("Employee", () => {
    describe ("class", () =>{
        it("should be an object", () => {
            const employeeObj =  new Employee();
            expect(typeof(employeeObj)).toBe("object");
        })
    })

    describe ("elements", () =>{
        it("should recieve name as employee.name", () => {
            const name = "Nathan"
            const employeeObj =  new Employee(name);
            expect(employeeObj.name).toEqual(name);
        })
        it("should recieve id as employee.id", () => {
            const id = 13
            const employeeObj =  new Employee("Nathan", id);
            expect(employeeObj.id).toEqual(id);
        })
        it("should recieve email as employee.email", () => {
            const email = "Nathanpatnaude@gmail.com"
            const employeeObj =  new Employee("Nathan", 13, email);
            expect(employeeObj.email).toEqual(email);
        })
    })

    describe ("getName()", () =>{
        it("should return Employee.name", () => {
            const name = "Nathan"
            const employeeObj =  new Employee(name);
            expect(employeeObj.getName()).toEqual(name);
        })
    })

    describe ("getId()", () =>{
        it("should return Employee.id", () => {
            const id = 13
            const employeeObj =  new Employee("Nathan", id);
            expect(employeeObj.getId()).toEqual(id);
        })
    })

    describe ("getEmail", () =>{
        it("should recieve email as employee.email", () => {
            const email = "Nathanpatnaude@gmail.com"
            const employeeObj =  new Employee("Nathan", 13, email);
            expect(employeeObj.getEmail()).toEqual(email);
        })
    })

    describe ("getRole", () =>{
        it("should recieve email as employee.email", () => {
            const employeeObj =  new Employee("Nathan", 13, "Nathanpatnaude@gmail.com");
            expect(employeeObj.getRole()).toEqual("Employee");
        })
    })
})