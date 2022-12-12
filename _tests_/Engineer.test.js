const Engineer = require("../lib/Engineer.js");

describe ("Engineer", () => {
    describe ("class", () =>{
        it("should be an object", () => {
            const engineerObj =  new Engineer();
            expect(typeof(engineerObj)).toBe("object");
        })
    })

    describe ("elements", () =>{
        it("should recieve name as Engineer.name", () => {
            const name = "Nathan"
            const engineerObj =  new Engineer(name);
            expect(engineerObj.name).toEqual(name);
        })
        it("should recieve id as Engineer.id", () => {
            const id = 13
            const engineerObj =  new Engineer("Nathan", id);
            expect(engineerObj.id).toEqual(id);
        })
        it("should recieve email as Engineer.email", () => {
            const email = "Nathanpatnaude@gmail.com"
            const engineerObj =  new Engineer("Nathan", 13, email);
            expect(engineerObj.email).toEqual(email);
        })
        it("should recieve githubUserName as Engineer.githubUserName", () => {
            const githubUserName = "NathanPatnaude" 
            const engineerObj =  new Engineer("Nathan", 13, "Nathanpatnaude@gmail.com", githubUserName);
            expect(engineerObj.githubUserName).toEqual(githubUserName);
        })
    })

    describe ("getName()", () =>{
        it("should return Engineer.name", () => {
            const name = "Nathan"
            const engineerObj =  new Engineer(name);
            expect(engineerObj.getName()).toEqual(name);
        })
    })

    describe ("getId()", () =>{
        it("should return Engineer.id", () => {
            const id = 13
            const engineerObj =  new Engineer("Nathan", id);
            expect(engineerObj.getId()).toEqual(id);
        })
    })

    describe ("getEmail", () =>{
        it("should return Engineer.email", () => {
            const email = "Nathanpatnaude@gmail.com"
            const engineerObj =  new Engineer("Nathan", 13, email);
            expect(engineerObj.getEmail()).toEqual(email);
        })
    })

    describe ("getgithubUserName", () =>{
        it("should return Engineer.officeNumber", () => {
            const githubUserName = "NathanPatnaude" 
            const engineerObj =  new Engineer("Nathan", 13, "Nathanpatnaude@gmail.com", githubUserName);
            expect(engineerObj.getgithubUserName()).toEqual(githubUserName);
        })
    })

    describe ("getRole", () =>{
        it("should recieve email as Engineer.email", () => {
            const engineerObj =  new Engineer("Nathan", 13, "Nathanpatnaude@gmail.com");
            expect(engineerObj.getRole()).toEqual("Engineer");
        })
    })
})