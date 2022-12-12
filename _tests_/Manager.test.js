const Manager = require("../lib/Manager.js");

describe ("Manager", () => {
    describe ("class", () =>{
        it("should be an object", () => {
            const managerObj =  new Manager();
            expect(typeof(managerObj)).toBe("object");
        })
    })

    describe ("elements", () =>{
        it("should recieve name as Manager.name", () => {
            const name = "Nathan"
            const managerObj =  new Manager(name);
            expect(managerObj.name).toEqual(name);
        })
        it("should recieve id as Manager.id", () => {
            const id = 13
            const managerObj =  new Manager("Nathan", id);
            expect(managerObj.id).toEqual(id);
        })
        it("should recieve email as Manager.email", () => {
            const email = "Nathanpatnaude@gmail.com"
            const managerObj =  new Manager("Nathan", 13, email);
            expect(managerObj.email).toEqual(email);
        })
        it("should recieve officeNumber as Manager.officeNumber", () => {
            const officeNumber = 666
            const managerObj =  new Manager("Nathan", 13, "Nathanpatnaude@gmail.com", officeNumber);
            expect(managerObj.officeNumber).toEqual(officeNumber);
        })
    })

    describe ("getName()", () =>{
        it("should return Manager.name", () => {
            const name = "Nathan"
            const managerObj =  new Manager(name);
            expect(managerObj.getName()).toEqual(name);
        })
    })

    describe ("getId()", () =>{
        it("should return Manager.id", () => {
            const id = 13
            const managerObj =  new Manager("Nathan", id);
            expect(managerObj.getId()).toEqual(id);
        })
    })

    describe ("getEmail", () =>{
        it("should return Manager.email", () => {
            const email = "Nathanpatnaude@gmail.com"
            const managerObj =  new Manager("Nathan", 13, email);
            expect(managerObj.getEmail()).toEqual(email);
        })
    })

    describe ("getOfficeNumber", () =>{
        it("should return Manager.officeNumber", () => {
            const officeNumber = 666 
            const managerObj =  new Manager("Nathan", 13, "Nathanpatnaude@gmail.com", officeNumber);
            expect(managerObj.getOfficeNumber()).toEqual(officeNumber);
        })
    })

    describe ("getRole", () =>{
        it("should recieve email as Manager.email", () => {
            const managerObj =  new Manager("Nathan", 13, "Nathanpatnaude@gmail.com");
            expect(managerObj.getRole()).toEqual("Manager");
        })
    })
})