const Intern = require("../lib/Intern.js");

describe ("Intern", () => {
    describe ("class", () =>{
        it("should be an object", () => {
            const internObj =  new Intern();
            expect(typeof(internObj)).toBe("object");
        })
    })

    describe ("elements", () =>{
        it("should recieve name as Intern.name", () => {
            const name = "Nathan"
            const internObj =  new Intern(name);
            expect(internObj.name).toEqual(name);
        })
        it("should recieve id as Intern.id", () => {
            const id = 13
            const internObj =  new Intern("Nathan", id);
            expect(internObj.id).toEqual(id);
        })
        it("should recieve email as Intern.email", () => {
            const email = "Nathanpatnaude@gmail.com"
            const internObj =  new Intern("Nathan", 13, email);
            expect(internObj.email).toEqual(email);
        })
        it("should recieve school as Intern.school", () => {
            const school = "Hogwarts" 
            const internObj =  new Intern("Nathan", 13, "Nathanpatnaude@gmail.com", school);
            expect(internObj.school).toEqual(school);
        })
    })

    describe ("getName()", () =>{
        it("should return Intern.name", () => {
            const name = "Nathan"
            const internObj =  new Intern(name);
            expect(internObj.getName()).toEqual(name);
        })
    })

    describe ("getId()", () =>{
        it("should return Intern.id", () => {
            const id = 13
            const internObj =  new Intern("Nathan", id);
            expect(internObj.getId()).toEqual(id);
        })
    })

    describe ("getEmail", () =>{
        it("should return Intern.email", () => {
            const email = "Nathanpatnaude@gmail.com"
            const internObj =  new Intern("Nathan", 13, email);
            expect(internObj.getEmail()).toEqual(email);
        })
    })

    describe ("School", () =>{
        it("should return Intern.school", () => {
            const school = "Hogwarts" 
            const internObj =  new Intern("Nathan", 13, "Nathanpatnaude@gmail.com", school);
            expect(internObj.getSchool()).toEqual(school);
        })
    })

    describe ("getRole", () =>{
        it("should recieve email as Intern.email", () => {
            const internObj =  new Intern("Nathan", 13, "Nathanpatnaude@gmail.com");
            expect(internObj.getRole()).toEqual("Intern");
        })
    })
})